import { AssetsUtils } from '../utilities/assets-utils.js';

export const getAppLayoutTemplate = () => `
  <div class="wrapper">
    <header>
      <div class="header-container">
        <div class="header-logo">
          <img class="logo-image" src="${AssetsUtils.getIconPath('unsplash')}" alt="Unsplash">
          <h1 class="logo-title">Unsplash API</h1>
        </div>
        <div class="search-container">
          <form class="search-form">
            <button class="button button--submit" type="submit">
              <img class="button__image" src="${AssetsUtils.getIconPath('search')}" alt="search button">
            </button>
            <input class="search" type="text" name="text" value="Belarus" placeholder="Search..." autocomplete="off" autofocus>
            <button class="button button--clear clear-button" type="button">
              <img class="button__clear-image" src="${AssetsUtils.getIconPath('clear')}" alt="clear button">
            </button>
          </form>
        </div>
      </div>
    </header>
    <main>
      <div class="image-container"></div>
    </main>
    <footer>
      <a href="https://github.com/Tubyliec">
        <img src="${AssetsUtils.getIconPath('github')}" alt="GitHub">
      </a>
      <p>2024</p>
      <a href="https://rs.school/courses/javascript">
        <img src="${AssetsUtils.getIconPath('rsschool')}" alt="Rsschool Icon">
      </a>
    </footer> 
  </div>
`;
