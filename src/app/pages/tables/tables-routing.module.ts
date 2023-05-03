import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { SmartTablebComponent } from './smart-tableb/smart-tableb.component';
import { SmartTableFrontComponent } from './smart-tableFront/smart-tableFront.component';
import { ViewThreadTagComponent } from './ViewThreadTag/ViewThreadTag.component';
import { ViewThreadDetailComponent } from './ViewThreadDetail/ViewThreadDetail.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'smart-tableb',
      component: SmartTablebComponent,
    }, {
      path: 'smart-tableFront',
      component: SmartTableFrontComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },{
      path: 'viewThreadTag',
      component:   ViewThreadTagComponent,
    },{path:'viewThreadDetail',component:ViewThreadDetailComponent}

    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,
  SmartTablebComponent,
  SmartTableFrontComponent,
  ViewThreadTagComponent,ViewThreadDetailComponent,

];
