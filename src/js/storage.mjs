
import { getTrendingMovies } from './movieService.mjs'; 
import { sidebarTemplate } from './utils.mjs';






export function getWatchlist() {
    const data = localStorage.getItem('xp-watchlist');
    return data ? JSON.parse(data) : [];
}

// Ensure your addToWatchlist also has the export word
export function addToWatchlist(movie) {
    let watchlist = getWatchlist();
    if (!watchlist.find(m => m.id === movie.id)) {
        watchlist.push(movie);
        localStorage.setItem('xp-watchlist', JSON.stringify(watchlist));
        alert("Added to watchlist!");
    }
}