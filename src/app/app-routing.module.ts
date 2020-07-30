import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {RiderComponent} from './rider/rider.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import {EmployeelistComponent} from'./employeelist/employeelist.component';
import { CreateempComponent} from './createemp/createemp.component';
import { PaymentComponent } from './payment/payment.component';
import { FindCarComponent } from './find-car/find-car.component';
const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
   {path:"register",component:RegistrationComponent},
   {path:"",redirectTo:"rider",pathMatch:"full"},
   {path:"rider",component:RiderComponent},
   {path:"search",component:SearchComponent},
   {path:"home",component:HomeComponent},
   {path:"login",component:LoginComponent},
  { path: 'employees', component: EmployeelistComponent },
   
   { path: 'create', component: CreateempComponent },
 {path:'pay',component:PaymentComponent},
   {path:'car', component:FindCarComponent}
 

];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
