export class ImageGallery {
  constructor(containerElement) {
    this.container = containerElement;
    this.images = [];
    this.init();
  }

  addImage(imageData) {
    this.images.push(imageData);
    this.renderImage(imageData);
  }

  renderImage(imageData) {
    const img = document.createElement('img');
    img.classList.add('image-gallery__image');
    img.loading = 'lazy';
    img.src = imageData.urls.regular;
    img.alt = imageData.alt_description || 'Gallery image';
    this.container.appendChild(img);
  }

  clear() {
    this.container.innerHTML = '';
    this.images = [];
  }

  renderImages(images) {
    this.clear();
    images.forEach((image) => this.renderImage(image));
  }

  init() {
    this.container.classList.add('image-gallery');
  }
}
