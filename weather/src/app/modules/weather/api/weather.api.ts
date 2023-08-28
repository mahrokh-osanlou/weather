import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class weatherApi {
  constructor(private http: HttpClient) {}
  appKey = '37400dcca845924e9ca4f4984fcf10ec';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

  searchWeatherData(location: string): Observable<any> {
    let queryParam = location + '&appid=' + this.appKey;
    return this.http.get(this.apiUrl + queryParam).pipe(
      catchError((error) => {
        return throwError(
          () => 'Error occurred while retrieving logged in user: ' + error
        );
      })
    );
  }
}
