import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {
  scrolled: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset;
    scrollPosition > 300 ? (this.scrolled = true) : (this.scrolled = false);
  }
}
