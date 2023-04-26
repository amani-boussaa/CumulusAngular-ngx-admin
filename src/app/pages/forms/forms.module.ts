import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { FormProfileAmaniComponent } from './form-profile-amani/form-profile-amani.component';
import { RemoveBaseUrlPipe } from '../../services/remove-base-url-pipe-service.service';
import { FormDetailuserAmaniComponent } from './form-detailuser-amani/form-detailuser-amani.component';
@NgModule({

  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    RemoveBaseUrlPipe,
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
    FormProfileAmaniComponent,
    FormDetailuserAmaniComponent,
  ],
  exports: [RemoveBaseUrlPipe],

})
export class FormsModule { }
