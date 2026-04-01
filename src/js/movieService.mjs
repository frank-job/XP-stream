// src/js/movieService.mjs
const API_KEY = 'bd1612db1bc60d9688b7a9eb4ce5ea7d'; // Put your key here
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export async function getTrendingMovies() {
    try {
        const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results; // Returns an array of 20 movies
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// Helper to build the full image path
export function getImageUrl(path) {
    return path ? `${IMG_URL}${path}` : 'https://via.placeholder.com/500x750?text=No+Image';
}

// Add this to your existing movieService.mjs
export async function searchMovies(query) {
    const API_KEY = 'bd1612db1bc60d9688b7a9eb4ce5ea7d';
    const BASE_URL = 'https://api.themoviedb.org/3';
    
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Search failed:", error);
    }
}