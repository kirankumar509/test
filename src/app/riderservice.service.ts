import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RiderserviceService {

 

  constructor(private http:HttpClient) { }


  public doRegistration(rider){
    return this.http.post("http://localhost:8095/t/u/rider",rider,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8095/getAllUsers");
  }

  public getUserByEmail(email){
    return this.http.get("http://localhost:8095//findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:8095/cancel/"+id);
  }
}
