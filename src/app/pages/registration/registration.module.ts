import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { EditRegistrationComponent } from './edit-registration/edit-registration.component';
import { RegisterToEventComponent } from './register-to-event/register-to-event.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    EditRegistrationComponent,
    RegisterToEventComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
