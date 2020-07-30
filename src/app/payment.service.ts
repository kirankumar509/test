import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }


  public doPayment(payment)
  {
    return this.http.post("http://localhost:8095/p/u/add",payment,{responseType:'text' as 'json'});
  }
}







