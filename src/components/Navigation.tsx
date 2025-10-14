import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/portfolio' || location.pathname === '/portfolio/';
  const isPlayDressUp = location.pathname === '/play-dress-up' || location.pathname === '/portfolio/play-dress-up';
  const isMovies = location.pathname === '/movies' || location.pathname === '/portfolio/movies';
  const isArtWork = location.pathname === '/art-work' || location.pathname === '/portfolio/art-work';
  const isDocumentDesign = location.pathname === '/document-design' || location.pathname === '/portfolio/document-design';
  const isVideoEditing = location.pathname === '/video-editing' || location.pathname === '/portfolio/video-editing';
  const isPlatforms = location.pathname === '/platforms' || location.pathname === '/portfolio/platforms';

  // Don't show navigation on home page, Play Dress Up, Movies, Art Work, Document Design, Video Editing, or Platforms pages (full-screen experiences)
  if (isHome || isPlayDressUp || isMovies || isArtWork || isDocumentDesign || isVideoEditing || isPlatforms) {
    return null;
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
            Hope Gilbert
          </Link>
          
          <Link 
            to="/" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <svg className="mr-2 -ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;

