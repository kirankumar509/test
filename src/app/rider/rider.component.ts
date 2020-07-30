import { Component, OnInit } from '@angular/core';
import {Rider} from'../rider';
import { RiderserviceService } from '../riderservice.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {

  rider:Rider=new Rider("","","","");
  message:any;
  constructor(private service:RiderserviceService) { }

  ngOnInit(): void {
  }

  public registerRider()
  {
let resp=this.service.doRegistration(this.rider);
resp.subscribe((data)=>this.message=data);
  }

  RiderForm: FormGroup;

}



