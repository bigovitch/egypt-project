import { Component, OnInit } from '@angular/core';
import { weatherInfo } from './weather-info';
import { cityWeather } from './weather-info-data';
import { GetweatherService } from 'src/app/services/getweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityW:weatherInfo[] | undefined

  constructor( private _weatherService:GetweatherService) { }

  ngOnInit(): void {
    this.cityW = this._weatherService.getWeatherInfo()
  }

}
