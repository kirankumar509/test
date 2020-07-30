import { Component, OnInit } from '@angular/core';
import {Payment} from './payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit 
{
  payment:Payment=new Payment("","","","","","")
  message:any;
  constructor(private service:PaymentService) { }

  ngOnInit(){}

    public paynow(){
      let resp=this.service.doPayment(this.payment);
      resp.subscribe((data)=>this.message=data);
        }
      
      


  }


  
  
  

  
   
