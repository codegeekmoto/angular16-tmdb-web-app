import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent {
  @Input() text: string = '';
  @Input() items: Array<string> = [];
  
  showMenu: boolean = false;

  toggleDropdown(show: boolean): void {
    this.showMenu = show;
  }
}
