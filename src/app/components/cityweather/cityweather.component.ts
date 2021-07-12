import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetweatherService } from 'src/app/services/getweather.service';
import { weatherInfo } from '../weather/weather-info';

@Component({
  selector: 'app-cityweather',
  templateUrl: './cityweather.component.html',
  styleUrls: ['./cityweather.component.css']
})
export class CityweatherComponent implements OnInit {
  name:any;
  cityW:weatherInfo[]=[];
  currentWeather: weatherInfo[] | undefined 


  constructor(private route:ActivatedRoute , private weatherService:GetweatherService) {
    this.route.params.subscribe((data)=>{
      this.currentWeather=data.name
    });
   }

  ngOnInit(): void {
    this.cityW = this.weatherService.getWeatherInfo()
  }

}
