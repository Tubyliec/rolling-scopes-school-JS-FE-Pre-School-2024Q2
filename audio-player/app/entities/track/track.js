import { PLAYLIST } from '../../shared/constants/playlist.js';

export class Track {
  constructor(playlist = PLAYLIST) {
    this.playlist = playlist;
    this.currentIndex = 0;
  }

  getCurrentTrack() {
    return this.playlist[this.currentIndex];
  }

  getNextTrack() {
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    return this.getCurrentTrack();
  }

  getPreviousTrack() {
    this.currentIndex =
      this.currentIndex === 0
        ? this.playlist.length - 1
        : this.currentIndex - 1;
    return this.getCurrentTrack();
  }

  setTrack(index) {
    if (index >= 0 && index < this.playlist.length) {
      this.currentIndex = index;
    }
    return this.getCurrentTrack();
  }

  getPlaylistLength() {
    return this.playlist.length;
  }
}
