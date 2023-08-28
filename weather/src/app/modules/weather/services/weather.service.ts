import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { weatherApi } from '../api/weather.api';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  cityFormControl: FormControl = new FormControl(null, [Validators.required]);
  $weatherResult: BehaviorSubject<any> = new BehaviorSubject(null);
  weatherData = new MatTableDataSource<any[]>([]);
  weatherDataSource = new MatTableDataSource<any[]>([]);

  toShow: boolean = false;
  constructor(private weatherApi: weatherApi) {}

  search() {
    let selectedLocation = this.cityFormControl.value;
    this.weatherApi.searchWeatherData(selectedLocation).subscribe(
      (resp) => {
        this.toShow = true;
        resp = {
          ...resp,
          temp: (resp.main.temp - 273.15).toFixed(1),
          icon: this.setIcon(resp.weather[0].description),
        };
        const data = this.weatherDataSource.data;
        data.push(resp);
        this.$weatherResult.next(resp);
        this.weatherDataSource = new MatTableDataSource<any>(data);
        localStorage.setItem(
          'list',
          JSON.stringify(this.weatherDataSource.data)
        );
      },
      (error) => {
        alert('Please enter the valid location');
      }
    );
  }

  setIcon(weatherConition: string) {
    switch (weatherConition) {
      case 'clear sky':
        return '../../../../../assets/images/weather-condition/clear-sky.png';
      case 'few clouds':
        return '../../../../../assets/images/weather-condition/clouds.png';
      case 'scattered clouds':
        return '../../../../../assets/images/weather-condition/weather.png';
      case 'broken clouds':
        return '../../../../../assets/images/weather-condition/partly-cloudy.png';
      case 'fog':
        return '../../../../../assets/images/weather-condition/fog.png';
      case 'shower rain':
        return '../../../../../assets/images/weather-condition/shower.png';
      case 'rain':
        return '../../../../../assets/images/weather-condition/raining.png';
      case 'thunderstorm':
        return '../../../../../assets/images/weather-condition/storm.png';
      case 'snow':
        return '../../../../../assets/images/weather-condition/snowy.png';
      case 'mist':
        return '../../../../../assets/images/weather-condition/haze.png';
      default:
        if (weatherConition.includes('cloud'))
          return '../../../../../assets/images/weather-condition/clouds.png';
        else if (weatherConition.includes('rain'))
          return '../../../../../assets/images/weather-condition/raining.png';
        else if (weatherConition.includes('snow'))
          return '../../../../../assets/images/weather-condition/snowy.png';
        else
          return '../../../../../assets/images/weather-condition/clear-sky.png';
    }
  }
}
