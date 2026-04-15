// import { sidebarTemplate, mobileBottomBar } from './utils.mjs';
import { sidebarTemplate, mobileBottomBar,} from './utils.mjs';
import features from '../data/features.json';


// 1. Inject UI
document.body.insertAdjacentHTML("afterbegin", sidebarTemplate);
document.body.insertAdjacentHTML("beforeend", mobileBottomBar);


function loadFeatures() {
    const container = document.querySelector('#features-container');
    if (!container) {
        console.error('Features container not found');
        return;
    }

    container.innerHTML = features.map(f => `
        <div class="xp-card">
            <img src="${f.icon_path}" alt="${f.feature_title}" style="width: 100%; height: 250px; object-fit: cover;">
            <div class="xp-info">
                <h3>${f.feature_title}</h3>
                <p><strong>${f.category}</strong></p>
                <p style="font-size: 0.9em; margin: 8px 0;">${f.description}</p>
                <p style="font-size: 0.85em; color: #aaa; margin: 5px 0;">Tech: ${f.tech_used}</p>
                <p style="font-size: 0.85em; color: #aaa;">Complexity: ${f.difficulty_score}%</p>
            </div>
        </div>
    `).join('');
}

loadFeatures();




