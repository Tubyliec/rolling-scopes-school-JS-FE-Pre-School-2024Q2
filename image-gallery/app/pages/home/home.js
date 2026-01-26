import { ImageSearch } from '../../features/image-search/image-search.js';
import { APP_CONFIG } from '../../core/config.js';
import { Header } from '../../widgets/header/header.js';
import { Footer } from '../../widgets/footer/footer.js';

export class HomePage {
  constructor() {
    this.init();
  }

  init() {
    this.setupComponents();
    this.setupEventListeners();
  }

  setupComponents() {
    this.header = new Header();
    this.footer = new Footer();

    this.setupImageGallery();
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

  setupEventListeners() {
    document.addEventListener('search', (e) => {
      if (this.imageSearch) {
        this.imageSearch.searchImages(e.detail);
      }
    });
  }
}
