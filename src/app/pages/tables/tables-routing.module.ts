import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import {SmartTableComponentmalik} from './smart-tablemalik/smart-table.componentmalik';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { SmartTableComponentmalikc } from './smart-tablemalikc/smart-table.componentmalikc';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'smart-tablemalik',
      component: SmartTableComponentmalik,
    },
    {
      path: 'smart-tablemalikc',
      component: SmartTableComponentmalikc,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
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
  SmartTableComponentmalik,
  SmartTableComponentmalikc,
  TreeGridComponent,
];
