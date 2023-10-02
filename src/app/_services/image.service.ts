import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor() { }

  getImageUrl(path: string): string {
    return `${this.baseUrl}${path}`;
  }
}
