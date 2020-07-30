import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  
  
  public createEmployee(employee){
    return this.http.post("http://localhost:8095/e/c/employees",employee,{responseType:'text' as 'json'});
  }

  /*private baseUrl = 'http://localhost:8083/r/c/employees';

  constructor(private http: HttpClient) { }

  

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }*/
}