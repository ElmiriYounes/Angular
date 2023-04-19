import { Component, HostListener } from '@angular/core';
import { navItems } from 'src/constants/navItems';
import { NavI } from 'src/interfaces/nav.interface';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('dropdownMobile', [
      state('hide', style({})),
      // style top bar to create the X
      state(
        'show',
        style({
          maxHeight: '500px',
        })
      ),
    ]),
  ],
})
export class NavbarComponent {
  items: NavI[] = navItems;
  clicked: boolean = false;
  isMobile: boolean = window.innerWidth <= 1080;

  toggle(): void {
    this.isMobile && (this.clicked = !this.clicked);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1080) {
      this.clicked && (this.clicked = false);
      this.isMobile && (this.isMobile = false);
    } else {
      !this.isMobile && (this.isMobile = true);
    }
  }
}
