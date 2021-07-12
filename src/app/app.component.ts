import { Component } from '@angular/core';
import { CitiesInfo } from './components/cities/cities-info-data';
import { CityInfo } from './components/cities/cities-info';
import { GetcitiesService } from './services/getcities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private citiesservice:GetcitiesService){ }
  
}
