import { sidebarTemplate, mobileBottomBar } from './utils.mjs';
import { getTrendingMovies, searchMovies, getImageUrl } from './movieService.mjs';



document.body.insertAdjacentHTML("afterbegin", sidebarTemplate);
document.body.insertAdjacentHTML("beforeend", mobileBottomBar);


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







const menBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
    // Check if the screen width is mobile size
    if (window.innerWidth <= 768) {
        // Redirect to your "More" page
        window.location.href = '/more/index.html';
    } else {
        // Optional: What happens on Desktop? 
        // Maybe show a sidebar or an alert
        alert("Menu is available on mobile only!");
    }
});







