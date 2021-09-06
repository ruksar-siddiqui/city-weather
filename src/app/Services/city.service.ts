import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {


  constructor(private http: HttpClient) { }

  getDetails(city) {
    return this
           .http
           .get("http://api.openweathermap.org/data/2.5/weather?q="+city+",uk&appid=3d8b309701a13f65b660fa2c64cdc517");
  }
}
