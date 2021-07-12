import { Component, OnInit } from '@angular/core';
import { GetcitiesService } from 'src/app/services/getcities.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myImage:string= "/assets/egypt.jpg";
  name = "";
  attractionSites : any;
CityInfo:any;

  constructor(private citiesservice:GetcitiesService) {
    this.CityInfo = citiesservice.getCitiesInfo() }

  ngOnInit(): void {
  }

}
