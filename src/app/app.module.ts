import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CitiesComponent } from './components/cities/cities.component';
import { HomeComponent } from './components/home/home.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { WeatherComponent } from './components/weather/weather.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityComponent } from './components/city/city.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CityweatherComponent } from './components/cityweather/cityweather.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CitiesComponent,
    HomeComponent,
    TechIdeasComponent,
    WeatherComponent,
    CityComponent,
    NotFoundComponent,
    CityweatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
