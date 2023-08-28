import { Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { WeatherForcastComponent } from "./components/weather-forcast/weather-forcast.component";
import { WeatherListComponent } from "./components/weather-list/weather-list.component";

export const routes: Routes = [
  {
    path: 'weather-list',
    component: WeatherListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'weather-forcast',
    component: WeatherForcastComponent,
    canActivate: [AuthGuard],
  },
];
export const routedComponents = [
  WeatherListComponent,
  WeatherForcastComponent,
];
