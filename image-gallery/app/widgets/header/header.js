export class Header {
  constructor() {
    this.element = document.querySelector('header');
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    const searchForm = this.element?.querySelector('.search-form');
    const clearButton = this.element?.querySelector('.clear-button');
    const searchInput = this.element?.querySelector('.search');

    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSearch(searchInput.value.trim());
      });
    }

    if (clearButton) {
      clearButton.addEventListener('click', () => {
        this.clearSearch(searchInput);
      });
    }
  }

  handleSearch(searchTerm) {
    if (searchTerm) {
      const searchEvent = new CustomEvent('search', { detail: searchTerm });
      document.dispatchEvent(searchEvent);
    }
  }

  clearSearch(searchInput) {
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
  }

  getSearchInput() {
    return this.element?.querySelector('.search');
  }

  setSearchValue(value) {
    const searchInput = this.getSearchInput();
    if (searchInput) {
      searchInput.value = value;
    }
  }
}
