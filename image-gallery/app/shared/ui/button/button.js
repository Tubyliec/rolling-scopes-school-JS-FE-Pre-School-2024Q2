export class Button {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      type: options.type || 'button',
      onClick: options.onClick || null,
    };
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    if (this.options.onClick) {
      this.element.addEventListener('click', this.options.onClick);
    }
  }

  setLoading(isLoading) {
    this.element.disabled = isLoading;
    if (isLoading) {
      this.element.classList.add('button--loading');
    } else {
      this.element.classList.remove('button--loading');
    }
  }
}
