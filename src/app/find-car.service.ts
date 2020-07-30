import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindCarService {

  constructor(private http:HttpClient) { }

  
  public findCarDetails(car){
    return this.http.post("http://localhost:8095/c/c/cardetails",car,{responseType:'text' as 'json'});
  }
}
