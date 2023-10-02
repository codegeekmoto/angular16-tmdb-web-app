import { Component } from '@angular/core';
import { TMDBService } from '../_services/tmdb.service';
import { ImageService } from '../_services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private tmdbService: TMDBService, protected imageService: ImageService) { }

  ngOnInit(): void {
    this.tmdbService.fetchMovieList().subscribe((data: any) => {
      console.log('DATA', data);
    });
  }
}
