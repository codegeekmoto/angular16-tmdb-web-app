import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {

  constructor(private http: HttpClient) {  }

  fetchMovieList() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular');
  }

  fetchMovieDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/collection/${id}?language=en-US`);
  }
}
