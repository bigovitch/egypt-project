import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { CityComponent } from './components/city/city.component';
import { HomeComponent } from './components/home/home.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { WeatherComponent } from './components/weather/weather.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'home' , component: HomeComponent},
  {path:'cities' , component: CitiesComponent},
  {path:'weather' , component: WeatherComponent},
  {path:'tech-ideas' , component: TechIdeasComponent},
  {path:'city/:name',component:CityComponent},
  {path:'city/:name/:attractionSites',component:CityComponent},
  {path:'city/:name/:attractionSites', component:CitiesComponent},
  
  {path:'**' , component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
