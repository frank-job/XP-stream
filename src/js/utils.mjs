export function renderWithTemplate(template, parentElement) {
    parentElement.insertAdjacentHTML("afterbegin", template);
}

export const sidebarTemplate = `
<aside class="sidebar">
    <div class="logo">
        <img src="/images/video.png" alt="Logo" class="sidebar-icon"> 
        <span class="nav-text">XP-<span>Stream</span></span>
    </div>

    <div class="sidebar-content">
        <div class="nav-group">
            <p class="nav-label nav-text">Menu</p>
            <ul>
                <li><a href="/" class="active"><img src="/images/home.png" alt="Home" class="sidebar-icon"> <span class="nav-text">Home</span></a></li>
                <li><a href="#"><img src="/images/trend.png" alt="Trending" class="sidebar-icon"> <span class="nav-text">Trending</span></a></li>
                <li><a href="#"><img src="/images/cinema.png" alt="Movies" class="sidebar-icon"> <span class="nav-text">Movies</span></a></li>
            </ul>
        </div>

        <div class="nav-group">
            <p class="nav-label nav-text">Categories</p>
            <ul>
                <li><a href="#"><img src="/images/action.png" alt="Action" class="sidebar-icon"> <span class="nav-text">Action</span></a></li>
                <li><a href="/genres/horror/"><img src="/images/ghost.png" class="sidebar-icon"> <span class="nav-text">Horror</span></a></li>
                <li><a href="/genres/comedy/"><img src="/images/action-movie.png" class="sidebar-icon"> <span class="nav-text">Comedy</span></a></li>
            </ul>
        </div>

        <div class="nav-group">
            <p class="nav-label nav-text">General</p>
            <ul>
                <li><a href="#"><img src="/images/download.png" alt="Downloads" class="sidebar-icon"> <span class="nav-text">Downloads</span></a></li>
                <li><a href="#"><img src="/images/send.png" alt="Share" class="sidebar-icon"> <span class="nav-text">Share App</span></a></li>
                <li><a href="#"><img src="/images/user.png" alt="Settings" class="sidebar-icon"> <span class="nav-text">Settings</span></a></li>
            </ul>
        </div>
    </div>

    <div class="sidebar-footer">
        <a href="#"><img src="/images/user.png" alt="Profile" class="sidebar-icon"> <span class="nav-text">My Profile</span></a>
    </div>
</aside>`;



export const mobileBottomBar = `
<div class="mobile-bottom-bar">
    <a href="/" class="nav-item active"><img src="/src/images/home.png" class="sidebar-icon"></a>
    <a href="#" class="nav-item"><img src="/src/images/trend.png" class="sidebar-icon"></a>
    <a href="#" class="nav-item"><img src="/src/images/cinema.png" class="sidebar-icon"></a>
    <div id="menu-btn" class="nav-item"><i class="fa-solid fa-bars"></i><span>Menu</span></div>
</div>`;


// please ignore the following code am still working on it is for details  and is not ready yet is still distubing me 
// if can help me with suggestion

export function movieDetailsTemplate(movie) {
    
    const poster = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return `
        <div class="movie-details">
            <div class="details-header">
                <img src="${poster}" alt="${movie.title}" class="details-poster">
                <div class="details-info">
                    <h2>${movie.title}</h2>
                    <p class="tagline"><em>${movie.tagline || ''}</em></p>
                    <div class="stats">
                        <span>⭐ ${movie.vote_average.toFixed(1)}</span>
                        <span>⏱️ ${movie.runtime} min</span>
                        <span>📅 ${movie.release_date.split('-')[0]}</span>
                    </div>
                    <p class="overview">${movie.overview}</p>
                    <button class="add-watchlist-btn">Add to Watchlist</button>
                </div>
            </div>
        </div>
    `;
}