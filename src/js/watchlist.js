import { sidebarTemplate, mobileBottomBar } from './utils.mjs';
import { getWatchlist } from './storage.mjs';
import { getImageUrl } from './movieService.mjs';

// 1. Inject UI
document.body.insertAdjacentHTML("afterbegin", sidebarTemplate);
document.body.insertAdjacentHTML("beforeend", mobileBottomBar);

function renderWatchlist() {
    const grid = document.querySelector('#watchlist-grid');
    const movies = getWatchlist();

    if (movies.length === 0) {
        grid.innerHTML = "<p class='no-results'>Your watchlist is empty.</p>";
        return;
    }

    grid.innerHTML = movies.map(movie => `
        <div class="movie-card" data-id="${movie.id}">
            <img src="${getImageUrl(movie.poster_path)}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="rating">⭐ ${movie.vote_average.toFixed(1)}</span>
            </div>
        </div>
    `).join('');
}

renderWatchlist();