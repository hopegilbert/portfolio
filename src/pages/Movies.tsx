import { useState, useMemo, useEffect } from 'react';
import { movies, type Movie } from '../data/movieData';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../config/tmdb';
import './Movies.css';

// Import assets
import yellowStar from '../assets/movies/yellow-star.png';
import emptyStar from '../assets/movies/empty-star.png';
import trailerIcon from '../assets/movies/trailer-icon.png';

const GENRES = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Drama', 
                'Fantasy', 'Horror', 'Musical', 'Romance', 'Sci-Fi', 'Thriller', 'War'];
const DECADES = ['1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'];
const RATINGS = [5, 4, 3, 2, 1];

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [sortBy, setSortBy] = useState('none');
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [showStats, setShowStats] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [recGenre, setRecGenre] = useState('all');
  const [recYear, setRecYear] = useState('all');
  const [recRating, setRecRating] = useState('all');
  const [loadingRecs, setLoadingRecs] = useState(false);
  const [flippedRecCards, setFlippedRecCards] = useState<Set<number>>(new Set());
  const [watchProviders, setWatchProviders] = useState<Record<string, any>>({});

  // Filter and sort movies
  const filteredMovies = useMemo(() => {
    let filtered = movies.filter(movie => {
      // Search filter
      if (searchTerm && !movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Genre filter
      if (genreFilter !== 'all' && movie.genre !== genreFilter) {
        return false;
      }
      
      // Year filter (by decade)
      if (yearFilter !== 'all') {
        const decade = parseInt(yearFilter);
        if (movie.year < decade || movie.year >= decade + 10) {
          return false;
        }
      }
      
      // Rating filter
      if (ratingFilter !== 'all') {
        const rating = parseInt(ratingFilter);
        if (Math.floor(movie.rating) !== rating) {
          return false;
        }
      }
      
      // Favorites filter
      if (showFavoritesOnly && !movie.favourite) {
        return false;
      }
      
      return true;
    });

    // Sort
    if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'year') {
      filtered.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [movies, searchTerm, genreFilter, yearFilter, ratingFilter, sortBy, showFavoritesOnly]);

  // Calculate stats
  const stats = useMemo(() => {
    const genreDistribution = movies.reduce((acc, movie) => {
      acc[movie.genre] = (acc[movie.genre] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const decadeDistribution = movies.reduce((acc, movie) => {
      const decade = `${Math.floor(movie.year / 10) * 10}s`;
      acc[decade] = (acc[decade] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const topRated = [...movies]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);

    const newest = [...movies]
      .sort((a, b) => b.year - a.year)
      .slice(0, 5);

    const avgRating = (movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length).toFixed(2);

    return {
      genreDistribution,
      decadeDistribution,
      topRated,
      newest,
      avgRating,
      total: movies.length
    };
  }, [movies]);

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleRecCardClick = (index: number) => {
    setFlippedRecCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Fetch watch providers for a movie
  const fetchWatchProviders = async (title: string, year: number) => {
    const cacheKey = `${title}-${year}`;
    
    // Return cached data if available
    if (watchProviders[cacheKey]) {
      return watchProviders[cacheKey];
    }

    try {
      // First, search for the movie to get its TMDB ID
      const searchResponse = await fetch(
        `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}&year=${year}`
      );
      
      if (!searchResponse.ok) return null;
      
      const searchData = await searchResponse.json();
      const movieId = searchData.results?.[0]?.id;
      
      if (!movieId) return null;

      // Then fetch watch providers using the movie ID
      const providersResponse = await fetch(
        `${TMDB_BASE_URL}/movie/${movieId}/watch/providers?api_key=${TMDB_API_KEY}`
      );
      
      if (!providersResponse.ok) return null;
      
      const providersData = await providersResponse.json();
      const gbProviders = providersData.results?.GB;
      
      // Cache the result
      setWatchProviders(prev => ({
        ...prev,
        [cacheKey]: gbProviders
      }));
      
      return gbProviders;
    } catch (error) {
      console.error('Error fetching watch providers:', error);
      return null;
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setGenreFilter('all');
    setYearFilter('all');
    setRatingFilter('all');
    setSortBy('none');
    setShowFavoritesOnly(false);
  };

  const getRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    setRandomMovie(movies[randomIndex]);
    setTimeout(() => setRandomMovie(null), 5000);
  };

  const generateRecommendations = async () => {
    setLoadingRecs(true);
    
    // This is a simplified recommendation system
    // In the original, this would call TMDB API
    // For now, we'll create recommendations based on the user's library
    const genreMap: Record<string, number> = {
      'Action': 28, 'Adventure': 12, 'Animation': 16, 'Comedy': 35,
      'Crime': 80, 'Drama': 18, 'Fantasy': 14, 'Horror': 27,
      'Musical': 10402, 'Romance': 10749, 'Sci-Fi': 878, 'Thriller': 53, 'War': 10752
    };

    try {
      // Build query parameters for TMDB API
      const params: any = {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        page: 1,
        sort_by: 'popularity.desc',
        include_adult: false,
        with_original_language: 'en',
        'vote_count.gte': '100',
        region: 'GB'
      };

      if (recGenre !== 'all') {
        params.with_genres = genreMap[recGenre];
      }

      if (recYear !== 'all') {
        params.primary_release_year = recYear;
      }

      if (recRating !== 'all') {
        const ratingNum = parseInt(recRating);
        const ratingRanges: Record<number, [number, number]> = {
          1: [2.0, 3.8], 2: [4.0, 5.8], 3: [6.0, 7.8], 4: [8.0, 9.8], 5: [10.0, 10.0]
        };
        const [min, max] = ratingRanges[ratingNum];
        params['vote_average.gte'] = min;
        params['vote_average.lte'] = max;
      }

      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${TMDB_BASE_URL}/discover/movie?${queryString}`);
      
      if (response.ok) {
        const data = await response.json();
        const existingTitles = new Set(movies.map(m => m.title.toLowerCase().replace(/[^a-z0-9]/g, '')));
        
        // Filter out movies already in library
        const newMovies = data.results
          .filter((movie: any) => {
            const normalizedTitle = movie.title.toLowerCase().replace(/[^a-z0-9]/g, '');
            return !existingTitles.has(normalizedTitle);
          })
          .slice(0, 20)
          .map((movie: any) => ({
            title: movie.title,
            year: new Date(movie.release_date).getFullYear(),
            genre: recGenre !== 'all' ? recGenre : 'Drama',
            rating: movie.vote_average / 2, // Convert from 10 to 5 scale
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            review: movie.overview,
            trailerUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' trailer')}`
          }));
        
        setRecommendations(newMovies);
      } else {
        // Fallback: show a message about needing an API key
        console.error('TMDB API key required. Get one at https://www.themoviedb.org/settings/api');
        alert('To use recommendations, you need a TMDB API key. Visit https://www.themoviedb.org/settings/api to get one for free!');
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      alert('To use recommendations, you need a TMDB API key. Visit https://www.themoviedb.org/settings/api to get one for free!');
    } finally {
      setLoadingRecs(false);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasPartial = rating % 1 > 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<img key={i} src={yellowStar} alt="Star" className="star" />);
      } else if (i === fullStars && hasPartial) {
        const decimal = Math.round((rating % 1) * 10);
        stars.push(
          <img 
            key={i} 
            src={new URL(`../assets/movies/0.${decimal}.png`, import.meta.url).href} 
            alt="Partial Star" 
            className="star" 
          />
        );
      } else {
        stars.push(<img key={i} src={emptyStar} alt="Empty Star" className="star empty" />);
      }
    }
    return stars;
  };

  const getDecadeClass = (year: number) => {
    const decade = Math.floor(year / 10) * 10;
    return `decade-${decade}s`;
  };

  const getGenreClass = (genre: string) => {
    return `genre-${genre.toLowerCase()}`;
  };

  const handleClose = () => {
    window.history.back();
  };

  // Component to render watch providers
  const WatchProviders = ({ movie, isFlipped }: { movie: Movie; isFlipped: boolean }) => {
    const [providers, setProviders] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
      // Only fetch if card is flipped AND hasn't been loaded before
      if (isFlipped && !hasLoaded) {
        const loadProviders = async () => {
          setLoading(true);
          const data = await fetchWatchProviders(movie.title, movie.year);
          setProviders(data);
          setLoading(false);
          setHasLoaded(true);
        };
        loadProviders();
      }
    }, [isFlipped, movie.title, movie.year, hasLoaded]);

    if (loading) {
      return (
        <div className="watch-providers">
          <h4 className="watch-providers-heading">Where to Watch</h4>
          <p className="no-providers">Loading...</p>
        </div>
      );
    }

    const streamProviders = providers?.flatrate || [];
    const rentProviders = providers?.rent || [];
    const buyProviders = providers?.buy || [];
    const allProviders = [...streamProviders, ...rentProviders, ...buyProviders];
    
    // Remove duplicates
    const uniqueProviders = allProviders.filter((provider, index, self) =>
      index === self.findIndex((p) => p.provider_id === provider.provider_id)
    );

    return (
      <div className="watch-providers">
        <h4 className="watch-providers-heading">Where to Watch</h4>
        {uniqueProviders.length > 0 ? (
          <div className="providers-grid">
            {uniqueProviders.map((provider) => (
              <img
                key={provider.provider_id}
                src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                alt={provider.provider_name}
                title={provider.provider_name}
                className="provider-logo"
              />
            ))}
          </div>
        ) : (
          <p className="no-providers">Not available on streaming</p>
        )}
      </div>
    );
  };

  return (
    <div className="movies-page">
      {/* Header */}
      <header className="cinema-header">
        <button className="back-to-gallery" onClick={handleClose}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <div className="ticket-stub">
          <h1>My Watch List</h1>
          <p className="subtitle">A Personal Film Library</p>
          <div className="ticket-tear"></div>
        </div>
      </header>

      {/* Search */}
      <div className="search-container">
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="results-count">{filteredMovies.length} movies</div>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-bar">
        <div className="filter-row">
          <select className="filter-select" value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
            <option value="all">All Genres</option>
            {GENRES.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>

          <select className="filter-select" value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
            <option value="all">All Decades</option>
            {DECADES.map(decade => (
              <option key={decade} value={decade}>{decade}s</option>
            ))}
          </select>

          <select className="filter-select" value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
            <option value="all">All Ratings</option>
            {RATINGS.map(rating => (
              <option key={rating} value={rating}>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</option>
            ))}
          </select>

          <select className="filter-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="none">Sort By</option>
            <option value="rating">Rating</option>
            <option value="year">Year</option>
            <option value="title">Title</option>
          </select>

          <button className="reset-filters-button" onClick={resetFilters}>
            <i className="fas fa-undo"></i> Reset Filters
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="stats-button" onClick={() => setShowStats(!showStats)}>
          <i className="fas fa-chart-bar"></i> Stats
        </button>
        
        <button className="lucky-button" onClick={getRandomMovie}>
          <i className="fas fa-film"></i> Random Movie
        </button>
        
        <button className="recommendations-button" onClick={() => setShowRecommendations(!showRecommendations)}>
          <i className="fas fa-magic"></i> Recommendations
        </button>
        
        <button 
          className={`favorites-button ${showFavoritesOnly ? 'active' : ''}`}
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
        >
          <i className="fas fa-heart"></i> Favorites
        </button>
      </div>

      {/* Random Movie Display */}
      {randomMovie && (
        <div className="random-movie-container">
          <h2>Random Pick!</h2>
          <div className="movie-card">
            <div className="movie-card-front">
              <img src={randomMovie.poster} alt={randomMovie.title} className="movie-poster loaded" />
              <div className="movie-info">
                <h3>{randomMovie.title}</h3>
                <div className="star-rating">{renderStars(randomMovie.rating)}</div>
                <div className="date-genre-row">
                  <span className={`year-display ${getDecadeClass(randomMovie.year)}`}>{randomMovie.year}</span>
                  <div className="genre-badges">
                    <span className={`genre-badge ${getGenreClass(randomMovie.genre)}`}>{randomMovie.genre}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="show-all-button" onClick={() => setRandomMovie(null)}>
            <i className="fas fa-th"></i> Show All Movies
          </button>
        </div>
      )}

      {/* Movies Grid */}
      <main className="main-content">
        <div className="movies-grid">
          {filteredMovies.map((movie, index) => (
            <div
              key={`${movie.title}-${index}`}
              className={`movie-card ${flippedCards.has(index) ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              {/* Front of card */}
              <div className="movie-card-front">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="movie-poster loaded"
                />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="star-rating">{renderStars(movie.rating)}</div>
                  <div className="date-genre-row">
                    <span className={`year-display ${getDecadeClass(movie.year)}`}>
                      {movie.year}
                    </span>
                    <div className="genre-badges">
                      <span className={`genre-badge ${getGenreClass(movie.genre)}`}>
                        {movie.genre}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back of card */}
              <div className="movie-card-back">
                <div className="back-content">
                  <h3>
                    {movie.title}
                    {movie.trailerUrl && (
                      <a 
                        href={movie.trailerUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="trailer-button"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img src={trailerIcon} alt="Watch Trailer" />
                      </a>
                    )}
                  </h3>
                  <div className="back-date-genre-row">
                    <span className={`year-display ${getDecadeClass(movie.year)}`}>
                      {movie.year}
                    </span>
                    <div className="genre-badges">
                      <span className={`genre-badge ${getGenreClass(movie.genre)}`}>
                        {movie.genre}
                      </span>
                    </div>
                  </div>
                    <div className="scrollable-content">
                      <div className="review-section">
                        <div className="review-heading-container">
                          <h4 className="review-heading">My Review</h4>
                          <div className="star-rating">{renderStars(movie.rating)}</div>
                        </div>
                        <p className="review-text">{movie.review}</p>
                      </div>
                      <WatchProviders movie={movie} isFlipped={flippedCards.has(index)} />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Stats Panel */}
      {showStats && (
        <>
          <div className="stats-overlay visible" onClick={() => setShowStats(false)}></div>
          <div className="stats-panel">
            <div className="stats-header">
              <h2>Movie Statistics</h2>
              <button className="close-stats" onClick={() => setShowStats(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="stats-section overview">
              <h3>Overview</h3>
              <p>Total Movies: <span className="total-movies">{stats.total}</span></p>
              <p>Average Rating: <span className="average-rating">{stats.avgRating}</span> / 5.0</p>
            </div>

            <div className="stats-section genre-stats">
              <h3>Genre Distribution</h3>
              <div className="stats-chart">
                {Object.entries(stats.genreDistribution)
                  .sort(([, a], [, b]) => b - a)
                  .map(([genre, count]) => (
                    <div key={genre} className="stats-bar">
                      <span className="stats-label">{genre}</span>
                      <div 
                        className="stats-bar-fill" 
                        style={{ width: `${(count / stats.total) * 100}%` }}
                      ></div>
                      <span className="stats-count">{count}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="stats-section decade-stats">
              <h3>Movies by Decade</h3>
              <div className="stats-chart">
                {Object.entries(stats.decadeDistribution)
                  .sort(([a], [b]) => b.localeCompare(a))
                  .map(([decade, count]) => (
                    <div key={decade} className="stats-bar">
                      <span className="stats-label">{decade}</span>
                      <div 
                        className="stats-bar-fill" 
                        style={{ width: `${(count / stats.total) * 100}%` }}
                      ></div>
                      <span className="stats-count">{count}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="stats-section top-rated">
              <h3>Top Rated Movies</h3>
              <div className="top-movies">
                {stats.topRated.map((movie) => (
                  <div key={movie.title} className="top-movie-item">
                    <h4>{movie.title}</h4>
                    <div className="movie-stats">
                      <div className="star-rating">{renderStars(movie.rating)}</div>
                      <p>{movie.year} • {movie.genre}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-section newest">
              <h3>Latest Releases</h3>
              <div className="top-movies">
                {stats.newest.map((movie) => (
                  <div key={movie.title} className="top-movie-item">
                    <h4>{movie.title}</h4>
                    <div className="movie-stats">
                      <div className="star-rating">{renderStars(movie.rating)}</div>
                      <p>{movie.year} • {movie.genre}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Recommendations Panel */}
      {showRecommendations && (
        <div className="recommendations-overlay visible" onClick={() => setShowRecommendations(false)}></div>
      )}
      <div className={`recommendations-panel ${!showRecommendations ? 'hidden' : ''}`}>
        <div className="recommendations-header">
          <h2>Movie Recommendations</h2>
          <button className="close-recommendations" onClick={() => setShowRecommendations(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="recommendation-filters">
          <div className="filter-row">
            <select className="filter-select" value={recGenre} onChange={(e) => setRecGenre(e.target.value)}>
              <option value="all">All Genres</option>
              {GENRES.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>

            <select className="filter-select" value={recYear} onChange={(e) => setRecYear(e.target.value)}>
              <option value="all">All Years</option>
              {Array.from({ length: 2025 - 1950 + 1 }, (_, i) => 2025 - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            <select className="filter-select" value={recRating} onChange={(e) => setRecRating(e.target.value)}>
              <option value="all">All Ratings</option>
              {RATINGS.map(rating => (
                <option key={rating} value={rating}>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</option>
              ))}
            </select>
          </div>

          <button className="generate-recommendations" onClick={generateRecommendations} disabled={loadingRecs}>
            <i className="fas fa-magic"></i> {loadingRecs ? 'Loading...' : 'Generate'}
          </button>
        </div>

        <div className="recommendations-grid">
          {loadingRecs ? (
            <div className="loading-message">
              <i className="fas fa-spinner fa-spin"></i> Loading recommendations...
            </div>
          ) : recommendations.length > 0 ? (
            recommendations.map((movie, index) => (
              <div 
                key={`rec-${index}`} 
                className={`recommendation-card movie-card ${flippedRecCards.has(index) ? 'flipped' : ''}`}
                onClick={() => handleRecCardClick(index)}
              >
                {/* Front of card */}
                <div className="movie-card-front">
                  <img 
                    src={movie.poster} 
                    alt={movie.title} 
                    className="movie-poster loaded"
                  />
                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <div className="star-rating">{renderStars(movie.rating)}</div>
                    <div className="date-genre-row">
                      <span className={`year-display ${getDecadeClass(movie.year)}`}>
                        {movie.year}
                      </span>
                      <div className="genre-badges">
                        <span className={`genre-badge ${getGenreClass(movie.genre)}`}>
                          {movie.genre}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="movie-card-back">
                  <div className="back-content">
                    <h3>
                      {movie.title}
                      {movie.trailerUrl && (
                        <a 
                          href={movie.trailerUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="trailer-button"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <img src={trailerIcon} alt="Watch Trailer" />
                        </a>
                      )}
                    </h3>
                    <div className="back-date-genre-row">
                      <span className={`year-display ${getDecadeClass(movie.year)}`}>
                        {movie.year}
                      </span>
                      <div className="genre-badges">
                        <span className={`genre-badge ${getGenreClass(movie.genre)}`}>
                          {movie.genre}
                        </span>
                      </div>
                    </div>
                    <div className="scrollable-content">
                      <div className="review-section">
                        <div className="review-heading-container">
                          <h4 className="review-heading">Overview</h4>
                          <div className="star-rating">{renderStars(movie.rating)}</div>
                        </div>
                        <p className="review-text">{movie.review}</p>
                      </div>
                      <WatchProviders movie={movie} isFlipped={flippedRecCards.has(index)} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-recommendations">
              <p>Click "Generate" to get personalized movie recommendations!</p>
            </div>
          )}
        </div>
      </div>

      <div className="license-footer">
        <p>Hope Gilbert's Musings and Research by Hope Gilbert is licensed under CC BY-ND 4.0</p>
      </div>
    </div>
  );
}

export default Movies;
