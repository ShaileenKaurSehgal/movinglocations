import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http : HttpClient) { }
  getAllData(){
    return this.http.get("assets/json/locationDetails.json");
  }
}
