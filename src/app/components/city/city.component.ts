import { Component, OnInit } from '@angular/core';
import { CitiesInfo } from '../cities/cities-info-data';
import { CityInfo } from '../cities/cities-info';
import { ActivatedRoute } from '@angular/router';
import { GetcitiesService } from 'src/app/services/getcities.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cityList:CityInfo[]=[]
  CitiesInfo:any;
name:any;
  attractionSites:any;
  currentCity: CityInfo = new CityInfo ('name', 'attractionSites');

  constructor(private route: ActivatedRoute, private citiesservice: GetcitiesService) {
  this.route.params.subscribe((data) => {
    this.currentCity = data.attractionSites;
    // this.currentCity = data.attractionSites;
      // return (params.get('this.name'));
    });


  }

  ngOnInit(): void {
    // this.currentCity = this._route.getCitiesInfo();
    this.cityList = this.citiesservice.getCitiesInfo()
    
  }

}
