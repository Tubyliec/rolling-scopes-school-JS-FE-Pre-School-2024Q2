import { fetchWithErrorHandling } from '../../shared/utilities/api-utils.js';
import { API_CONFIG } from '../../core/config.js';
import { Image } from '../../entities/image/image.entity.js';

export class ImageSearch {
  constructor(containerElement, searchTerm = 'Belarus') {
    this.container = containerElement;
    this.container.classList.add('image-gallery');
    this.searchTerm = searchTerm;
    this.isLoading = false;
    this.init();
  }

  async searchImages(term) {
    if (this.isLoading) return;

    this.isLoading = true;
    this.showLoading();

    try {
      const url = `${API_CONFIG.BASE_URL}/search/photos?query=${encodeURIComponent(term)}&client_id=${API_CONFIG.UNSPLASH_ACCESS_KEY}&per_page=${API_CONFIG.IMAGES_PER_PAGE}`;
      const data = await fetchWithErrorHandling(url);

      this.container.innerHTML = '';
      this.renderImages(data.results);
      this.searchTerm = term;
    } catch (error) {
      this.showError('Failed to load images. Please try again.');
      console.error('Search failed:', error);
    } finally {
      this.isLoading = false;
      this.hideLoading();
    }
  }

  renderImages(images) {
    images.forEach((imageData) => {
      try {
        const image = Image.fromApiResponse(imageData);
        const img = document.createElement('img');
        img.classList.add('image-gallery__image');
        img.loading = 'lazy';
        img.src = image.url;
        img.alt = image.description || 'Image';
        this.container.appendChild(img);
      } catch (error) {
        console.warn('Invalid image data skipped:', error);
      }
    });
  }

  showLoading() {
    this.container.innerHTML = '<div class="loading">Loading images...</div>';
  }

  hideLoading() {
    const loadingElement = this.container.querySelector('.loading');
    if (loadingElement) {
      loadingElement.remove();
    }
  }

  showError(message) {
    this.container.innerHTML = `<div class="error">${message}</div>`;
  }

  init() {
    this.searchImages(this.searchTerm);
  }
}
