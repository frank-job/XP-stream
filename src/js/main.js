import { sidebarTemplate, mobileBottomBar, videoPlayerTemplate } from './utils.mjs';


import { getWatchlist } from './storage.mjs'; // Check spelling here
import { getTrendingMovies, searchMovies, getImageUrl, getLocalCategories } from './movieService.mjs';

import { getTrailerKey } from './movieService.mjs';
// import { addToWatchlist } from './storage.mjs';

document.body.insertAdjacentHTML("afterbegin", sidebarTemplate);
document.body.insertAdjacentHTML("beforeend", mobileBottomBar);
document.body.insertAdjacentHTML("beforeend", videoPlayerTemplate);

const movieGrid = document.querySelector('#trending-grid');
const categoriesGrid = document.querySelector('#categories-grid');
const sectionTitle = document.querySelector('.movie-section h2');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

const menuBtn = document.querySelector('#menu-btn');
const sidebar = document.querySelector('.sidebar');

// Load categories from JSON
const categories = await getLocalCategories();
console.log('Categories loaded:', categories);
if (categories) displayCategories(categories);


function displayCategories(categories) {
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = categories.map(category => `
        <div class="movie-card category-card" style="background-color: ${category.color_accent}20; border: 2px solid ${category.color_accent};">
            <div class="category-content" style="padding: 20px; text-align: center;">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <p style="margin-top: 10px; font-weight: bold;">${category.total_count}</p>
                <a href="/${category.slug}/" style="display: block; margin-top: 10px; color: ${category.color_accent}; text-decoration: none; font-weight: bold;">View More →</a>
            </div>
        </div>
    `).join('');
}


function displayMovies(movies) {
    if (!movieGrid) return;

    if (movies.length === 0) {
        movieGrid.innerHTML = `<p class="no-results">No movies found.</p>`;
        return;
    }

    movieGrid.innerHTML = movies.map(movie => {
        // We clean the movie data to prevent single quotes from breaking the HTML
        const movieData = JSON.stringify(movie).replace(/'/g, "&apos;");

        return `
        <div class="movie-card" data-id="${movie.id}">
            <img src="${getImageUrl(movie.poster_path)}" alt="${movie.title}" loading="lazy">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="rating">⭐ ${movie.vote_average.toFixed(1)}</span>
                <button class="add-to-watchlist" data-movie='${movieData}'>
                    <i class="fa-solid fa-plus"></i>    <span class="btn-text">Add to Watchlist</span>
                </button>
            </div>
        </div>`;
    }).join('');
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

        modal.classList.add('active');
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

const watchlistButtons = document.querySelectorAll('.add-to-watchlist');
watchlistButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const movieId = e.target.dataset.id;
        addToWatchlist(movieId);
    });
});









import { addToWatchlist } from './storage.mjs';

document.addEventListener('click', (e) => {

    const addBtn = e.target.closest('.add-to-watchlist');

    if (addBtn) {
        e.stopPropagation();


        const movieData = JSON.parse(addBtn.dataset.movie);

        // Save it!
        addToWatchlist(movieData);
        return; // Stop here
    }


    const card = e.target.closest('.movie-card');
    if (card) {
        const movieId = card.dataset.id;

        loadPageDetails(movieId);
    }
});


