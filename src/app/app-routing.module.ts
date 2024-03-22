import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FiveDayWeatherComponent } from './five-day-weather/five-day-weather.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { AirPollutionComponent } from './air-pollution/air-pollution.component';
import { GeocodingComponent } from './geocoding/geocoding.component';
import { WeatherWidgetsComponent } from './weather-widgets/weather-widgets.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'current', component: CurrentWeatherComponent },
  { path: 'current/:country/:city', component: WeatherDetailsComponent },
  { path: 'five', component: FiveDayWeatherComponent },
  { path: 'air-pollution', component: AirPollutionComponent},
  { path: 'geocoding', component: GeocodingComponent},
  { path: 'widget', component: WeatherWidgetsComponent},
  { path: 'home', redirectTo:'/', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
