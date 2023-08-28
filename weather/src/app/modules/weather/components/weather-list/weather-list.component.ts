import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { WeatherService } from '../../services/weather.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'country' ,  'temp', 'humidity', 'weatherCondition'];
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(public weatherService: WeatherService) {}

  ngOnInit(): void {
    if (
      !this.weatherService.weatherDataSource.data.length &&
      localStorage.getItem('list')
    ) {
      this.weatherService.weatherDataSource = new MatTableDataSource<any>(
        JSON.parse(localStorage.getItem('list') ?? '')
      );
    }
  }
}
