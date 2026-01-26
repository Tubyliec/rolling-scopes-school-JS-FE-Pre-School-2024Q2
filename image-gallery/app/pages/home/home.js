import { ImageSearch } from '../features/image-search/image-search.js';
import { APP_CONFIG } from '../core/config.js';

export class HomePage {
  constructor() {
    this.init();
  }

  init() {
    this.setupImageGallery();
    this.setupSearchForm();
  }

  setupImageGallery() {
    const container = document.querySelector('.image-container');
    if (container) {
      this.imageSearch = new ImageSearch(
        container,
        APP_CONFIG.DEFAULT_SEARCH_TERM,
      );
    }
  }

  setupSearchForm() {
    const searchForm = document.querySelector('.search-form');
    const clearButton = document.querySelector('.clear-button');
    const searchInput = document.querySelector('.search');

    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
          this.imageSearch.searchImages(searchTerm);
        }
      });
    }

    if (clearButton) {
      clearButton.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
      });
    }
  }
}
