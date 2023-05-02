import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

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
    PdfViewerModule
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
  ],
})
export class TablesModule { }
