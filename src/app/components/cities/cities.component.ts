import { Component, OnInit } from '@angular/core';
import { GetcitiesService } from 'src/app/services/getcities.service';
import { CitiesInfo } from './cities-info-data';
import { CityInfo } from './cities-info';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: any;
  name = "";
  attractionSites: any;
  CityInfo: any;
  city?: "string";
  cityList:CityInfo[]=[]

  constructor(private citiesservice: GetcitiesService) {


  }
  ngOnInit() {

    this.cityList = this.citiesservice.getCitiesInfo()

  }

}