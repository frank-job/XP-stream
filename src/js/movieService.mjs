
const API_KEY = 'bd1612db1bc60d9688b7a9eb4ce5ea7d';
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


export function getImageUrl(path) {
    return path ? `${IMG_URL}${path}` : 'https://via.placeholder.com/500x750?text=No+Image';
}


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

export async function getMovieDetails(movieId) {
    try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
}



export async function getMoviesByGenre(genreId) {
    const API_KEY = 'bd1612db1bc60d9688b7a9eb4ce5ea7d';
    const BASE_URL = 'https://api.themoviedb.org/3';

    try {
        const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching genre movies:", error);
    }
}






export async function getTrailerKey(id, type = 'movie') {
    try {
        const url = `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        // Find a Trailer on YouTube
        const trailer = data.results.find(vid => vid.type === 'Trailer' && vid.site === 'YouTube');
        return trailer ? trailer.key : null;
    } catch (error) {
        console.error("Error fetching trailer:", error);
        return null;
    }
}




// src/js/movieService.mjs
import categoriesData from '../data/categories.json';

export async function getLocalCategories() {
    try {
        // Import JSON directly - no fetch needed
        return categoriesData;
    } catch (error) {
        console.error("Error loading local JSON:", error);
    }
}