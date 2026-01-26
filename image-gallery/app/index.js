import { HomePage } from './pages/home/home.js';
import { AssetsUtils } from './shared/utilities/assets-utils.js';
import { getAppLayoutTemplate } from './shared/templates/app-layout.template.js';

document.addEventListener('DOMContentLoaded', () => {
  AssetsUtils.preloadIcons().catch((error) => {
    console.warn('Failed to preload some icons:', error);
  });

  const appElement = document.getElementById('app');
  appElement.innerHTML = getAppLayoutTemplate();

  new HomePage();
});
