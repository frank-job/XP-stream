
import { sidebarTemplate } from './utils.mjs';
import { getTrendingMovies, searchMovies, getImageUrl } from './movieService.mjs';

// 1. Inject Sidebar
document.body.insertAdjacentHTML("afterbegin", sidebarTemplate);

// 2. Reference the HTML elements
const movieGrid = document.querySelector('#trending-grid');
const sectionTitle = document.querySelector('.movie-section h2');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

// 3. Reusable Function to Render Cards
function displayMovies(movies) {
    if (movies.length === 0) {
        movieGrid.innerHTML = `<p class="no-results">No movies found. Try another title!</p>`;
        return;
    }
    
    movieGrid.innerHTML = movies.map(movie => `
        <div class="movie-card">
            <img src="${getImageUrl(movie.poster_path)}" alt="${movie.title}" loading="lazy">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="rating"><i class="fa-solid fa-star"></i> ${movie.vote_average.toFixed(1)}</span>
            </div>
        </div>
    `).join('');
}

// 4. Search Handler
async function handleSearch() {
    const query = searchInput.value;
    if (query.trim() === "") return;

    sectionTitle.innerText = `Results for: "${query}"`;
    movieGrid.innerHTML = `<div class="loader">Searching...</div>`; // Cool feedback

    const results = await searchMovies(query);
    displayMovies(results);
}

// 5. Event Listeners
searchBtn.addEventListener('click', handleSearch);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// 6. Initial Load (Trending Movies)
async function init() {
    const trending = await getTrendingMovies();
    displayMovies(trending);
}

init();