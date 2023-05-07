import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { EvenementRoutingModule, routedComponents } from './evenement-routing.modules';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    EvenementRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule
  ],  
  declarations: [
  ...routedComponents,

  ],
})
export class EvenementModule { }
