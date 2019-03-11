import { Track } from './track';

export class Album {
  id: number;
  name: string;
  image: string;
  track?: Track[];

  constructor (id, name, image){
    this.id = id;
    this.name = name;
    this.image = image;
  }
}

// ? para que algo no sea requerido
