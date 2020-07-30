import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';

import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createemp',
  templateUrl: './createemp.component.html',
  styleUrls: ['./createemp.component.css']
})
export class CreateempComponent implements OnInit {

  employee: Employee = new Employee("","","","");
  message:any;
  

  constructor(private service: EmployeeService
   ) { }

  ngOnInit() {
  }

  public newEmployee()
  {
    let resp=this.service.createEmployee(this.employee);
    resp.subscribe((data)=>this.message=data);
  }
}


 

  
  
