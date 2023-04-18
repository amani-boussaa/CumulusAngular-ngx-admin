import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ForumRoutingModule, routedComponents } from './forum-routing.module';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    ForumRoutingModule,
    Ng2SmartTableModule,
  ],  
  declarations: [
    ...routedComponents,

  ],
})
export class ForumModule { }
