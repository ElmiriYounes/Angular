import { Component, ElementRef } from '@angular/core';
import { heroBackground } from 'src/constants/images';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  heroBg: string = heroBackground;

  constructor(
    private elementRef: ElementRef,
    private viewportScroller: ViewportScroller
  ) {}

  scrollToServices() {
    const topOfElement: number =
      this.elementRef.nativeElement.parentNode.querySelector(
        `#toServices`
      ).offsetTop;

    this.viewportScroller.scrollToPosition([0, topOfElement]);
  }
}
