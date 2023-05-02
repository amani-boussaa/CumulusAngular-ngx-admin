import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormProfileAmaniComponent } from './form-profile-amani/form-profile-amani.component';
import { FormDetailuserAmaniComponent } from './form-detailuser-amani/form-detailuser-amani.component';
import { FormdetailcomplaintamaniComponent } from './formdetailcomplaintamani/formdetailcomplaintamani.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
      {
        path: 'profile',
        component: FormProfileAmaniComponent,
      },
      {
        path: 'detailuser/:id',
        component: FormDetailuserAmaniComponent,
      },
      {
        path: 'detailcomplaint/:id',
        component: FormdetailcomplaintamaniComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

