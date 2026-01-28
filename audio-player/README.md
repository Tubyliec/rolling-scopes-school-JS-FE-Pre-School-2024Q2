# Audio Player

A modern, responsive audio player built with vanilla JavaScript, HTML5, and SCSS. This project was created as part of The Rolling Scopes School JavaScript Frontend Pre-School 2024Q2.

## Features

- **Playback Controls**: Play, pause, previous, and next track functionality
- **Progress Bar**: Interactive seek bar with time display
- **Track Information**: Display current song title, artist, and album art
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern UI**: Clean, minimalist interface with smooth transitions
- **Playlist Management**: Navigate through multiple tracks with automatic looping

## Technologies Used

- **HTML5**: Semantic markup and audio API
- **JavaScript (ES6+)**: Modern JavaScript with modules
- **SCSS**: CSS preprocessing with variables and mixins
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **Stylelint**: CSS/SCSS linting

### Building

The project uses SCSS for styling. To compile styles:

```bash
npx sass app/styles.scss app/styles.css --watch
```

## Available Scripts

- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Automatically fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run stylelint` - Run Stylelint for CSS/SCSS
- `npm run stylelint:fix` - Automatically fix Stylelint issues
- `npm run linters` - Run all linters (format, lint, stylelint)
- `npm run linters:fix` - Fix all linting issues automatically
