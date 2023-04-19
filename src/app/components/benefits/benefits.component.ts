import { Component } from '@angular/core';
import { iconsBenefits } from 'src/constants/iconsBenefits';
import { IIconBenefit } from 'src/interfaces/benefits.interface';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent {
  icons: IIconBenefit[] = iconsBenefits;
}
