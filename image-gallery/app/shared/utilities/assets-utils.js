import { ASSETS_CONFIG } from '../../core/config.js';

export class AssetsUtils {
  static getIconPath(iconName) {
    const icon = ASSETS_CONFIG.ICONS[iconName.toUpperCase()];
    if (!icon) {
      console.warn(`Icon "${iconName}" not found in ASSETS_CONFIG`);
      return '';
    }
    return icon;
  }

  static getAssetPath(assetPath) {
    return `${ASSETS_CONFIG.BASE_PATH}/${assetPath}`;
  }

  static preloadAssets(assetPaths) {
    return Promise.all(
      assetPaths.map((path) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(path);
          img.onerror = () =>
            reject(new Error(`Failed to load asset: ${path}`));
          img.src = path;
        });
      }),
    );
  }

  static preloadIcons() {
    const iconPaths = Object.values(ASSETS_CONFIG.ICONS);
    return this.preloadAssets(iconPaths);
  }
}