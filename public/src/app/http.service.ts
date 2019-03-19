import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  cities = {
    dc: 4140963,
    burbank: 4885983,
    chicago: 4887398,
    dallas: 4190598,
    sanjose: 5392171,
    seattle: 5809844,
}

  constructor(private _http: HttpClient) {};

  getCity(city: string){
    console.log('come into server! city is:',city)
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${this.cities[city]}&units=imperial&appid=cbbde626479df5aeda96b369d2a0aab6`)
   }

}
