import { formatTime } from '../../shared/utilities/time-formatter.js';
import {
  addEventListener,
  removeEventListener,
} from '../../shared/utilities/dom-utils.js';
import { UPDATE_INTERVAL } from '../../shared/constants/audio-constants.js';

export class PlaybackController {
  constructor(audio, elements) {
    this.audio = audio;
    this.elements = elements;
    this.isPlaying = false;
    this.updateInterval = null;
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.audio
      .play()
      .then(() => {
        this.isPlaying = true;
        this.elements.play.classList.add('played');
        this.startProgressUpdate();
      })
      .catch((error) => {
        console.error('Error playing audio:', error);
      });
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.elements.play.classList.remove('played');
    this.stopProgressUpdate();
  }

  seekTo(time) {
    this.audio.currentTime = time;
  }

  startProgressUpdate() {
    this.stopProgressUpdate();
    this.updateInterval = setInterval(() => {
      this.elements.seekBar.value = this.audio.currentTime;
      this.elements.current.textContent = formatTime(this.audio.currentTime);
    }, UPDATE_INTERVAL);
  }

  stopProgressUpdate() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  setupEventListeners() {
    addEventListener(this.elements.play, 'click', () => this.togglePlay());
    addEventListener(this.elements.seekBar, 'change', (e) =>
      this.seekTo(e.target.value),
    );
    addEventListener(this.audio, 'ended', () => this.onTrackEnded());
  }

  cleanup() {
    this.stopProgressUpdate();
    removeEventListener(this.elements.play, 'click', () => this.togglePlay());
    removeEventListener(this.elements.seekBar, 'change', (e) =>
      this.seekTo(e.target.value),
    );
    removeEventListener(this.audio, 'ended', () => this.onTrackEnded());
  }

  onTrackEnded() {
    this.pause();
  }
}
