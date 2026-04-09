export function renderWithTemplate(template, parentElement) {
    parentElement.insertAdjacentHTML("afterbegin", template);
}

export const sidebarTemplate = `
<aside class="sidebar">
    <div class="logo">
        <img src="/images/logoo.PNG" alt="Logo" class="sidebar-icon"> 
        <span class="nav-text">XP-<span>Stream</span></span>
    </div>

    <div class="sidebar-content">
        <div class="nav-group">
            <p class="nav-label">Menu</p>
            <ul class="nav-list">
                <li><a href="/" class="active"><img src="/images/homebutton .png" alt="Home" class="sidebar-icon"> <span class="nav-text">Home</span></a></li>
                <li><a href="#"><img src="/images/folder.png" alt="Series" class="sidebar-icon"> <span class="nav-text">Series</span></a></li>
                <li><a href="#" id="nav-tv" class="nav-item"><img src="/images/tv.png" alt="TV" class="sidebar-icon"> <span class="nav-text">TV Shows</span></a></li>
               
            </ul>
        </div>

        <div class="nav-group">
            <p class="nav-label nav-text">Categories</p>
            <ul>
                <li><a href="/genres/action/"><img src="/images/revolver.png" alt="Action" class="sidebar-icon"> <span class="nav-text">Action</span></a></li>
                <li><a href="/genres/horror/"><img src="/images/horror.png" class="sidebar-icon"> <span class="nav-text">Horror</span></a></li>
                <li><a href="/genres/comedy/"><img src="/images/comed.png" class="sidebar-icon"> <span class="nav-text">Comedy</span></a></li>
            </ul>
        </div>

        <div class="nav-group">
            <p class="nav-label nav-text">General</p>

                <li><a href="#"><img src="/images/download.png" alt="Downloads" class="sidebar-icon"> <span class="nav-text">Downloads</span></a></li>
                <li><a href="#"><img src="/images/send .png" alt="Share" class="sidebar-icon"> <span class="nav-text">Share App</span></a></li>
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
    <!-- HOME: Resets the view to Trending -->
    <a href="#" id="nav-home" class="nav-item active">
        <img src="/images/homebutton .png" alt="Home" class="sidebar-icon"> 
        <span class="nav-text">Home</span>
    </a>
    
   <a href="#" id="nav-tv" class="nav-item">
    <img src="/images/tv.png" alt="TV" class="sidebar-icon"> 
    <span class="nav-text">TV Shows</span>
</a>

<a href="#"><img src="/images/user.png" alt="Settings" class="sidebar-icon"> <span class="nav-text">Settings</span></a>

   
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