import { Component, ElementRef, OnInit } from '@angular/core';
import { services } from 'src/constants/services';
import { IService } from 'src/interfaces/services.interface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services: IService[] = services;
}
