import { Component, OnInit } from '@angular/core';
import {Car} from  '../car';

import { FindCarService } from '../find-car.service';
@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.css']
})
export class FindCarComponent implements OnInit {

 car:Car=new Car("","","","");
 message:any;
  constructor(private service:FindCarService) { }

  ngOnInit() {
  }
   public findCar(){
let resp=this.service.findCarDetails(this.car);
resp.subscribe((data)=>this.message=data);
  }

}

