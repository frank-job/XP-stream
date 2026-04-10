import { sidebarTemplate, mobileBottomBar,videoPlayerTemplate } from './utils.mjs';
import { getTrendingMovies, searchMovies, getImageUrl } from './movieService.mjs';

import { getTrailerKey } from './movieService.mjs';
// import { getTVShows, getTrailer } from './movieService.mjs';

document.body.insertAdjacentHTML("afterbegin", sidebarTemplate);
document.body.insertAdjacentHTML("beforeend", mobileBottomBar);
document.body.insertAdjacentHTML("beforeend", videoPlayerTemplate);


const movieGrid = document.querySelector('#trending-grid');
const sectionTitle = document.querySelector('.movie-section h2');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');


const menuBtn = document.querySelector('#menu-btn');
const sidebar = document.querySelector('.sidebar');



function displayMovies(movies) {
    if (!movieGrid) return; 
    
    if (movies.length === 0) {
        movieGrid.innerHTML = `<p class="no-results">No movies found. Try another title!</p>`;
        return;
    }
    
    movieGrid.innerHTML = movies.map(movie => `
        <div class="movie-card" data-id="${movie.id}">
            <img src="${getImageUrl(movie.poster_path)}" alt="${movie.title}" loading="lazy">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="rating"><i class="fa-solid fa-star"></i> ${movie.vote_average.toFixed(1)}</span>
            </div>
        </div>
    `).join('');
}

async function handleSearch() {
    const query = searchInput.value;
    if (query.trim() === "") return;

    if (sectionTitle) sectionTitle.innerText = `Results for: "${query}"`;
    movieGrid.innerHTML = `<div class="loader">Searching...</div>`;

    const results = await searchMovies(query);
    displayMovies(results);
}



if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
}




async function init() {
    console.log("App initializing...");
    const trending = await getTrendingMovies();
    console.log("Trending movies fetched:", trending);
    displayMovies(trending);
}

init();




// 2. References
const modal = document.getElementById('video-modal');
const player = document.getElementById('youtube-player');
const closeBtn = document.getElementById('close-video');

// 3. THE FIXED FUNCTION
async function playTrailer(id, type = 'movie') {
    const key = await getTrailerKey(id, type);

    if (key) {
     
        player.src = `https://www.youtube.com/embed/${key}?autoplay=1&modestbranding=1&rel=0`;
        
        modal.classList.add('active'); // Make sure your CSS uses .active { display: flex; }
    } else {
        alert("Sorry, no trailer found!");
    }
}


document.addEventListener('click', (e) => {
    const card = e.target.closest('.movie-card');
    if (card) {
        const id = card.dataset.id;
        const type = card.dataset.type || 'movie';
        playTrailer(id, type);
    }
});


const hideVideo = () => {
    modal.classList.remove('active');
    player.src = ""; 
};

if (closeBtn) closeBtn.addEventListener('click', hideVideo);

window.addEventListener('click', (e) => {
    if (e.target === modal) hideVideo();
});

