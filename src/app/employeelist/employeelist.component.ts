import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
   // this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
   // this.employeeService.deleteEmployee(id)
     // .subscribe(
      //  data => {
        //  console.log(data);
          this.reloadData();
        //},
       // error => console.log(error));
  }

  //employeeDetails(id: number){
 //  this.router.navigate(['details', id]);
 // }*/
}