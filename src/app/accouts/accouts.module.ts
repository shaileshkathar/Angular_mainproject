import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccoutsRoutingModule } from './accouts-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccoutsRoutingModule
  ]
})
export class AccoutsModule { }
