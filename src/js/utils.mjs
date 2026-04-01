// src/js/utils.mjs
export function renderWithTemplate(template, parentElement) {
    parentElement.insertAdjacentHTML("afterbegin", template);
}

export const sidebarTemplate = `

<aside class="sidebar">
    <!-- Logo Section -->
    <div class="logo">
        <i class="fa-solid fa-play"></i> 
        <span class="nav-text">XP-<span>Stream</span></span>
    </div>

    <!-- Navigation Groups -->
    <div class="sidebar-content">
        
        <!-- SECTION 1: MENU -->
        <div class="nav-group">
            <p class="nav-label nav-text">Menu</p>
            <ul>
                <li><a href="/" class="active"><i class="fa-solid fa-house"></i> <span class="nav-text">Home</span></a></li>
                <li><a href="#"><i class="fa-solid fa-fire"></i> <span class="nav-text">Trending</span></a></li>
                <li><a href="#"><i class="fa-solid fa-clapperboard"></i> <span class="nav-text">Movies</span></a></li>
            </ul>
        </div>

        <!-- SECTION 2: CATEGORIES -->
        <div class="nav-group">
            <p class="nav-label nav-text">Categories</p>
            <ul>
                <li><a href="#"><i class="fa-solid fa-mask"></i> <span class="nav-text">Action</span></a></li>
                <li><a href="#"><i class="fa-solid fa-ghost"></i> <span class="nav-text">Horror</span></a></li>
                <li><a href="#"><i class="fa-solid fa-face-laugh-squint"></i> <span class="nav-text">Comedy</span></a></li>
            </ul>
        </div>

        <!-- SECTION 3: GENERAL/TOOLS -->
        <div class="nav-group">
            <p class="nav-label nav-text">General</p>
            <ul>
                <li><a href="#"><i class="fa-solid fa-download"></i> <span class="nav-text">Downloads</span></a></li>
                <li><a href="#"><i class="fa-solid fa-share-nodes"></i> <span class="nav-text">Share App</span></a></li>
                <li><a href="#"><i class="fa-solid fa-gear"></i> <span class="nav-text">Settings</span></a></li>
            </ul>
        </div>
    </div>

    <!-- BOTTOM MENU BUTTON -->
    <div class="sidebar-footer">
        <a href="#"><i class="fa-solid fa-circle-user"></i> <span class="nav-text">My Profile</span></a>
    </div>
</aside>`;