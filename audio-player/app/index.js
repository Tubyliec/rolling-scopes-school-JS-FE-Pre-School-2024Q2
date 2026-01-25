import { AudioPlayer } from './core/audio-player.js';

document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = new AudioPlayer();

  window.addEventListener('beforeunload', () => {
    audioPlayer.cleanup();
  });
});
