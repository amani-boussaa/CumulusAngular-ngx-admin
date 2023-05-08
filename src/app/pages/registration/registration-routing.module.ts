import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EditRegistrationComponent } from './edit-registration/edit-registration.component';

const routes: Routes = [
  {path:"register", component:RegistrationComponent},
  {path:"editRegistration", component:EditRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
