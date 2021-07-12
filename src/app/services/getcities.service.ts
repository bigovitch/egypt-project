import { Injectable } from '@angular/core';
import { CityInfo } from '../components/cities/cities-info';
import { CitiesInfo } from '../components/cities/cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {
CitiesInfo:CityInfo[]=[
  {name:"Aswan" , attractionSites:["Abu-Simbel" , "Nubian Museum" , "ElephantLine"]},
        {name:"Cairo" , attractionSites:["The Pyramids" , "Nile" , "Khan EL-Khalily"]},
        {name:"Luxor" , attractionSites:["Valley of The Kings" , "Karnak" , "Luxor Temple"]},
        {name:"Sharm EL-Sheikh" , attractionSites:["Naama" , "Ras Muhamed National Park"]},
];
 
  constructor() { }
  
  getCitiesInfo(): CityInfo[] {
    return this.CitiesInfo; 
  }
  // getCityInfoByName():CityInfo{
  //   return this.City
  //   };
}

