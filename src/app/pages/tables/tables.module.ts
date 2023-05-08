import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule, NbToastrModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { NbTagModule } from '@nebular/theme';
import { CommentSectionComponent } from './commentSection/commentSection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThreadStatsComponent } from './ThreadStats/ThreadStats.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule, NbTagModule,NbListModule
    ,NbUserModule,NbButtonModule,FormsModule ,NbToastrModule,NbEvaIconsModule ,NbSelectModule,ReactiveFormsModule,NbActionsModule,NgxEchartsModule,    NgxChartsModule
    
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,CommentSectionComponent,ThreadStatsComponent
    
  ],
})
export class TablesModule { }
