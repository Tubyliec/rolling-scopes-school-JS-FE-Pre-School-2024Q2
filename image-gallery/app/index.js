import { HomePage } from './pages/home/home.js';

document.addEventListener('DOMContentLoaded', () => {
  // Create and inject the HTML content
  const appElement = document.getElementById('app');
  appElement.innerHTML = `
    <div class="wrapper">
        <header>
            <div class="header-container">
                <div class="header-logo">
                    <img class="logo-image" src="public/assets/icons/unsplash.png" alt="Unsplash">
                    <h1 class="logo-title">Unsplash API</h1>
                </div>
                <div class="search-container">
                    <form class="search-form">
                        <button class="button button--submit" type="submit">
                            <img class="button__image" src="public/assets/icons/search-icon.png" alt="search button">
                        </button>
                        <input class="search" type="text" name="text" value="Belarus" placeholder="Search..." autocomplete="off" autofocus>
                        <button class="button button--clear clear-button" type="button">
                            <img class="button__clear-image" src="public/assets/icons/clear.png" alt="clear button">
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
                <img src="public/assets/icons/github.svg" alt="GitHub">
            </a>
            <p>2024</p>
            <a href="https://rs.school/courses/javascript">
                <img src="public/assets/icons/rsschool.svg" alt="Rsschool Icon">
            </a>
        </footer> 
    </div>
  `;

  new HomePage();
});
