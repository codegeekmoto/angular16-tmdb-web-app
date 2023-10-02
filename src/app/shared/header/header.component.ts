import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  moviesMenu: Array<string> = ['Popular', 'Now Playing', 'Upcoming', 'Top Rated'];
  tvShowsMenu: Array<string> = ['Popular', 'Now Playing', 'Upcoming', 'Top Rated'];
  peopleMenu: Array<string> = ['Popular People'];

  showMobileMenu: boolean = false;

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
