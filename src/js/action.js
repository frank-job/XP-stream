import { sidebarTemplate, mobileBottomBar } from './utils.mjs';
import { getMoviesByGenre, getImageUrl } from './movieService.mjs';

// 1. Inject the Sidebar and Bottom Bar
document.body.insertAdjacentHTML("afterbegin", sidebarTemplate);
document.body.insertAdjacentHTML("beforeend", mobileBottomBar);

async function loadAction() {
    const actionGrid = document.querySelector('#action-grid');
    
    // Genre ID 28 is for Action
    const movies = await getMoviesByGenre(28); 

    actionGrid.innerHTML = movies.map(movie => `
        <div class="movie-card" data-id="${movie.id}">
            <img src="${getImageUrl(movie.poster_path)}" alt="${movie.title}" loading="lazy">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="rating">⭐ ${movie.vote_average.toFixed(1)}</span>
            </div>
        </div>
    `).join('');
}

loadAction();