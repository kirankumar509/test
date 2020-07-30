import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  public doLogin(login){
    return this.http.post("http://localhost:8095/l/u/logindetails",login,{responseType:'text' as 'json'});
  }
}
