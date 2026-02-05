// State
let activeCategories = new Set();
let searchQuery = '';

// DOM Elements
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const clearFiltersBtn = document.getElementById('clear-filters');
const categoriesContainer = document.getElementById('categories-container');
const caseStudiesGrid = document.getElementById('case-studies-grid');
const resultsCount = document.getElementById('results-count');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderCaseStudies();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
        renderCaseStudies();
    });

    // Clear search
    clearSearchBtn.addEventListener('click', () => {
        searchQuery = '';
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        renderCaseStudies();
    });

    // Clear filters
    clearFiltersBtn.addEventListener('click', () => {
        activeCategories.clear();
        renderCategories();
        renderCaseStudies();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Focus search on '/'
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
        // Clear search on Escape
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.blur();
            if (searchQuery) {
                searchQuery = '';
                searchInput.value = '';
                clearSearchBtn.style.display = 'none';
                renderCaseStudies();
            }
        }
    });
}

// Render Categories
function renderCategories() {
    categoriesContainer.innerHTML = categories.map(category => `
        <button
            class="category-tag ${activeCategories.has(category) ? 'active' : ''}"
            data-category="${category}"
        >
            ${category}
            <span class="count">${categoryCounts[category]}</span>
        </button>
    `).join('');

    // Add click handlers
    categoriesContainer.querySelectorAll('.category-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const category = tag.dataset.category;
            if (activeCategories.has(category)) {
                activeCategories.delete(category);
            } else {
                activeCategories.add(category);
            }
            renderCategories();
            renderCaseStudies();
        });
    });
}

// Filter Case Studies
function getFilteredCaseStudies() {
    return caseStudies.filter(cs => {
        // Category filter
        if (activeCategories.size > 0 && !activeCategories.has(cs.category)) {
            return false;
        }

        // Search filter
        if (searchQuery) {
            const searchableText = `${cs.title} ${cs.description} ${cs.category} ${cs.source}`.toLowerCase();
            return searchableText.includes(searchQuery);
        }

        return true;
    });
}

// Render Case Studies
function renderCaseStudies() {
    const filtered = getFilteredCaseStudies();

    // Update results count
    const count = filtered.length;
    resultsCount.textContent = `${count} case ${count === 1 ? 'study' : 'studies'}`;

    // Render cards or empty state
    if (filtered.length === 0) {
        caseStudiesGrid.innerHTML = `
            <div class="empty-state">
                <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                </svg>
                <h3 class="empty-state-title">No case studies found</h3>
                <p class="empty-state-description">
                    Try adjusting your search or filters to find what you're looking for.
                </p>
            </div>
        `;
        return;
    }

    caseStudiesGrid.innerHTML = filtered.map(cs => `
        <a href="${cs.url}" target="_blank" rel="noopener noreferrer" class="case-study-card">
            <span class="card-category">${cs.category}</span>
            <h3 class="card-title">${highlightText(cs.title)}</h3>
            <p class="card-description">${highlightText(cs.description)}</p>
            <div class="card-meta">
                <span class="card-source">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    ${cs.source}
                </span>
            </div>
        </a>
    `).join('');
}

// Highlight search text
function highlightText(text) {
    if (!searchQuery) return text;

    const regex = new RegExp(`(${escapeRegExp(searchQuery)})`, 'gi');
    return text.replace(regex, '<mark style="background: rgba(46, 170, 220, 0.2); padding: 0 2px; border-radius: 2px;">$1</mark>');
}

// Escape special regex characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
