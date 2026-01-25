import { Track } from '../entities/track/track.js';
import { PlaybackController } from '../features/playback/playback.js';
import { formatTime } from '../shared/utilities/time-formatter.js';
import {
  createElements,
  addEventListener,
} from '../shared/utilities/dom-utils.js';
import { AUDIO_SELECTORS } from '../shared/constants/audio-constants.js';

export class AudioPlayer {
  constructor() {
    this.audio = new Audio();
    this.track = new Track();
    this.elements = this.initializeElements();
    this.playbackController = new PlaybackController(this.audio, this.elements);

    this.setupEventListeners();
    this.loadCurrentTrack();
  }

  initializeElements() {
    return createElements({
      previous: AUDIO_SELECTORS.PREVIOUS,
      play: AUDIO_SELECTORS.PLAY,
      next: AUDIO_SELECTORS.NEXT,
      singer: AUDIO_SELECTORS.SINGER,
      song: AUDIO_SELECTORS.SONG,
      avatar: AUDIO_SELECTORS.AVATAR,
      background: AUDIO_SELECTORS.BACKGROUND,
      duration: AUDIO_SELECTORS.DURATION,
      current: AUDIO_SELECTORS.CURRENT,
      seekBar: AUDIO_SELECTORS.SEEK_BAR,
    });
  }

  setupEventListeners() {
    this.playbackController.setupEventListeners();

    addEventListener(this.elements.next, 'click', () => this.playNext());
    addEventListener(this.elements.previous, 'click', () =>
      this.playPrevious(),
    );

    this.audio.addEventListener('loadedmetadata', () =>
      this.onMetadataLoaded(),
    );
    this.audio.addEventListener('ended', () => this.playNext());
  }

  loadCurrentTrack() {
    const currentTrack = this.track.getCurrentTrack();
    this.audio.src = currentTrack.src;

    this.elements.singer.textContent = currentTrack.singer;
    this.elements.song.textContent = currentTrack.song;
    this.elements.avatar.style.backgroundImage = `url("${currentTrack.avatar}")`;
    this.elements.background.style.backgroundImage = `url("${currentTrack.avatar}")`;
  }

  onMetadataLoaded() {
    this.elements.duration.textContent = formatTime(this.audio.duration);
    this.elements.seekBar.max = Math.floor(this.audio.duration);
  }

  playNext() {
    this.playbackController.pause();
    this.track.getNextTrack();
    this.loadCurrentTrack();
    this.playbackController.play();
  }

  playPrevious() {
    this.playbackController.pause();
    this.track.getPreviousTrack();
    this.loadCurrentTrack();
    this.playbackController.play();
  }

  cleanup() {
    this.playbackController.cleanup();
    this.audio.removeEventListener('loadedmetadata', () =>
      this.onMetadataLoaded(),
    );
    this.audio.removeEventListener('ended', () => this.playNext());
  }
}
