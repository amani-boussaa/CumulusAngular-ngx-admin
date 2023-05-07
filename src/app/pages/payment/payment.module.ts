import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,NbButtonModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {DataTablesModule} from 'angular-datatables';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { NbWindowFormComponent, NbWindowFormComponentGiftCard, NbWindowFormComponentVoucher } from './Wallet/client/billing/billing.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

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
    NgxChartsModule,
    NgxEchartsModule,
    ChartModule,
  ],
  declarations: [
     ...routedComponents,
     NbWindowFormComponent,
     NbWindowFormComponentGiftCard,
     NbWindowFormComponentVoucher,

    // FsIconComponent,
  ],
})
export class PaymentModule { }
