# TMDB Movie Recommendations

**✅ Already Configured!** The recommendations feature is ready to use.

## How to Use

1. Navigate to the Movies page
2. Click the "Recommendations" button (magic wand icon)
3. (Optional) Select filters:
   - Genre (Action, Drama, Sci-Fi, etc.)
   - Year (1950-2025)
   - Rating (1-5 stars)
4. Click "Generate"
5. Browse personalized movie recommendations!

## What It Does

The recommendations system:
- Fetches popular movies from The Movie Database (TMDB)
- Automatically filters out movies already in your library
- Respects your genre, year, and rating preferences
- Shows up to 20 movies at a time
- Displays posters, ratings, and details for each recommendation

## Technical Details

- API Key: Already configured in `src/config/tmdb.ts`
- Data Source: The Movie Database (TMDB) API
- Filter Logic: Excludes any movie titles already in your collection
- Rating Conversion: Converts TMDB's 10-point scale to your 5-star system
