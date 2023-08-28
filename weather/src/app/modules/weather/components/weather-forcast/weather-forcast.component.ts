import { Component, OnDestroy } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { MyErrorStateMatcher } from 'src/app/modules/shared/classes/error-state-matcher';

@Component({
  selector: 'app-weather-forcast',
  templateUrl: './weather-forcast.component.html',
  styleUrls: ['./weather-forcast.component.scss'],
})
export class WeatherForcastComponent implements OnDestroy {
  matcher = new MyErrorStateMatcher();
  constructor(public weatherService: WeatherService) {}

  ngOnDestroy(): void {
    this.weatherService.$weatherResult.next(null);
    this.weatherService.toShow = false;
    this.weatherService.cityFormControl.reset();
  }
}
