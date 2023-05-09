import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule, NbToastrModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { TableAmaniComponent } from './table-amani/table-amani.component';
import { ShowDetailsButtonComponentComponent } from './show-details-button-component/show-details-button-component.component';
import { TableamanicomplaintComponent } from './tableamanicomplaint/tableamanicomplaint.component';
import { ShowdetailsbuttontcomplaintComponent } from './showdetailsbuttontcomplaint/showdetailsbuttontcomplaint.component';
import { NbTagModule } from '@nebular/theme';
import { CommentSectionComponent } from './commentSection/commentSection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThreadStatsComponent } from './ThreadStats/ThreadStats.component';
import { BOComponent } from './BO/BO.component';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    FormsModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    PdfViewerModule,
    NbButtonModule,
     NbTagModule,
     NbListModule,
     NbUserModule ,
     NbToastrModule,
     NbEvaIconsModule ,
     NbSelectModule,
     ReactiveFormsModule,
     NbActionsModule,
     NgxEchartsModule,
     NgxChartsModule
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    TableAmaniComponent,
    ShowDetailsButtonComponentComponent,
    TableamanicomplaintComponent,
    ShowdetailsbuttontcomplaintComponent,
    CommentSectionComponent,
    ThreadStatsComponent,
    BOComponent
  ],

})
export class TablesModule { }
