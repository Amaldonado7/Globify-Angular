export class Track {
  id: number;
  name: string;
  duration: any;
  preview_url: string;

  constructor(id, name, duration, preview_url) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.preview_url = preview_url;
  }
}
