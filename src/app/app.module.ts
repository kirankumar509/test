import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserRegistationService} from './user-registration.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RiderComponent } from './rider/rider.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

import { CreateempComponent } from './createemp/createemp.component';
import { PaymentComponent } from './payment/payment.component';
import { FindCarComponent } from './find-car/find-car.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
   LoginComponent,
   RiderComponent,
   SearchComponent,
   HomeComponent,
  
   CreateempComponent,
    PaymentComponent,
   FindCarComponent,
   
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [UserRegistationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
