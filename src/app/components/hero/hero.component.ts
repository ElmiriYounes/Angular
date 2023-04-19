import { Component } from '@angular/core';
import { heroBackground } from 'src/constants/images';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  heroBg: string = heroBackground;
}
