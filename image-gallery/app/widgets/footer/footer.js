import { AssetsUtils } from '../../shared/utilities/assets-utils.js';

export class Footer {
  constructor() {
    this.element = document.querySelector('footer');
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    const links = this.element?.querySelectorAll('a');
    links?.forEach(link => {
      link.addEventListener('click', (e) => {
        this.handleLinkClick(e);
      });
    });
  }

  handleLinkClick(event) {
    const href = event.target.closest('a')?.href;
    if (href) {
      const linkClickEvent = new CustomEvent('footerLinkClick', { 
        detail: { url: href } 
      });
      document.dispatchEvent(linkClickEvent);
    }
  }

  updateYear(year) {
    const yearElement = this.element?.querySelector('p');
    if (yearElement) {
      yearElement.textContent = year;
    }
  }

  getCurrentYear() {
    return new Date().getFullYear().toString();
  }
}
