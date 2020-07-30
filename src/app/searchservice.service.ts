import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  constructor(private http:HttpClient) { }



  public getRiderByEmail(email){
    return this.http.get("http://localhost:8093/t/u/findRider/"+email);
  }

  public deleteRider(id){
    return this.http.delete("http://localhost:8093/t/u/cancel/"+id);
  }
}




