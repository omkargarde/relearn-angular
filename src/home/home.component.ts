import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HousingLocationComponent],
})
export class HomeComponent {
  housingService = inject(HousingService);
  housingLocationList: HousingLocation[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
