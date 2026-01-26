export class Image {
  constructor(data) {
    this.id = data.id;
    this.url = data.urls?.regular || data.url;
    this.thumbnailUrl = data.urls?.thumb || data.thumbnailUrl;
    this.description = data.description || data.alt_description || '';
    this.width = data.width;
    this.height = data.height;
    this.createdAt = new Date(data.created_at);
    this.likes = data.likes || 0;
    this.color = data.color || '#000000';

    this.user = data.user
      ? {
          id: data.user.id,
          name: data.user.name,
          username: data.user.username,
          profileImage:
            data.user.profile_image?.small || data.user.profileImage,
          profileUrl: data.user.links?.html || data.user.profileUrl,
        }
      : null;

    this.links = data.links
      ? {
          self: data.links.self,
          html: data.links.html,
          download: data.links.download,
        }
      : null;
  }

  getAspectRatio() {
    return this.width / this.height;
  }

  isLandscape() {
    return this.width > this.height;
  }

  isPortrait() {
    return this.height > this.width;
  }

  getFormattedDate() {
    return this.createdAt.toLocaleDateString();
  }

  getFormattedLikes() {
    return this.likes.toLocaleString();
  }

  static validate(data) {
    return (
      data &&
      typeof data.id === 'string' &&
      (data.urls?.regular || data.url) &&
      typeof data.width === 'number' &&
      typeof data.height === 'number'
    );
  }

  static fromApiResponse(data) {
    if (!Image.validate(data)) {
      throw new Error('Invalid image data');
    }
    return new Image(data);
  }
}
