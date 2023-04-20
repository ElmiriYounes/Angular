import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  Input,
} from '@angular/core';
import { navItems } from 'src/constants/navItems';
import { NavI } from 'src/interfaces/nav.interface';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ViewportScroller } from '@angular/common';

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

  constructor(
    private elementRef: ElementRef,
    private viewportScroller: ViewportScroller
  ) {}

  toggle(): void {
    this.isMobile && (this.clicked = !this.clicked);
  }

  scrollTo(scrollToId: string) {
    const topOfElement: number =
      this.elementRef.nativeElement.parentNode.querySelector(
        `#${scrollToId}`
      ).offsetTop;

    this.viewportScroller.scrollToPosition([0, topOfElement]);
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
