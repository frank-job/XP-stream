import { sidebarTemplate, mobileBottomBar } from './utils.mjs';
import { getMoviesByGenre, getImageUrl } from './movieService.mjs';

// 1. Inject the Sidebar and Bottom Bar
document.body.insertAdjacentHTML("afterbegin", sidebarTemplate);
document.body.insertAdjacentHTML("beforeend", mobileBottomBar);

async function loadComedy() {
    const comedyGrid = document.querySelector('#comedy-grid');
    
    // Genre ID 35 is for Comedy
    const movies = await getMoviesByGenre(35); 

    comedyGrid.innerHTML = movies.map(movie => `
        <div class="movie-card" data-id="${movie.id}">
            <img src="${getImageUrl(movie.poster_path)}" alt="${movie.title}" loading="lazy">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="rating">⭐ ${movie.vote_average.toFixed(1)}</span>
                      <button class="add-to-watchlist" data-id="${movie.id}"><i class="fa-solid fa-plus"></i> Add to Watchlist</button>
            </div>
        </div>
    `).join('');
}

loadComedy();