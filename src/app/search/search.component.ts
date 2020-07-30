import { Component, OnInit } from '@angular/core';


import {SearchserviceService} from '../searchservice.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  rider:any;
  email:string;
  constructor(private service:SearchserviceService) { }

 public findRiderByEmailId(){
   let resp= this.service.getRiderByEmail(this.email);
   resp.subscribe((data)=>this.rider=data);
  }
  public deleteRider(id:number){
    let resp= this.service.deleteRider(id);
    resp.subscribe((data)=>this.rider=data);
   }
  ngOnInit() 
  {
    
  }


}



 
 
  