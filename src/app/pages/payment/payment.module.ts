import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,NbButtonModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {DataTablesModule} from 'angular-datatables';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  


import { ThemeModule } from '../../@theme/theme.module';
 import { PaymentRoutingModule, routedComponents } from './payment-routing.module';
 import {
  NbAlertModule,
  NbTabsetModule
} from '@nebular/theme';

// import { FsIconComponent } from './tree-grid/tree-grid.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    PaymentRoutingModule,
    Ng2SmartTableModule,
    FormsModule,  
    ReactiveFormsModule, 
    DataTablesModule,
    NbAlertModule,
    NbTabsetModule,
    NbButtonModule,
  ],
  declarations: [
     ...routedComponents,
    // FsIconComponent,
  ],
})
export class PaymentModule { }
