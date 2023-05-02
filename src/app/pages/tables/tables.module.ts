import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { TableAmaniComponent } from './table-amani/table-amani.component';
import { ShowDetailsButtonComponentComponent } from './show-details-button-component/show-details-button-component.component';
import { TableamanicomplaintComponent } from './tableamanicomplaint/tableamanicomplaint.component';
import { ShowdetailsbuttontcomplaintComponent } from './showdetailsbuttontcomplaint/showdetailsbuttontcomplaint.component';

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
    NbButtonModule

  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    TableAmaniComponent,
    ShowDetailsButtonComponentComponent,
    TableamanicomplaintComponent,
    ShowdetailsbuttontcomplaintComponent,
  ],
})
export class TablesModule { }
