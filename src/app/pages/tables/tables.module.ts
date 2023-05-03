import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { NbTagModule } from '@nebular/theme';
import { CommentSectionComponent } from './commentSection/commentSection.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule, NbTagModule,NbListModule
    
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,CommentSectionComponent
    
  ],
})
export class TablesModule { }
