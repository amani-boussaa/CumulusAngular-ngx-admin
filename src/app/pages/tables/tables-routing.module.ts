import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import {SmartTablemalikComponent} from './smart-tablemalik/smart-tablemalik.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { SmartTablemalikcComponent } from './smart-tablemalikc/smart-tablemalikc.component';
import {SmartTablemalikuComponent} from './smart-tablemaliku/smart-tablemaliku.component';
import {SmartTablemalikuiComponent} from './smart-tablemalikui/smart-tablemalikui.component';
import {SmartTablemalikmailComponent} from './smart-tablemalikmail/smart-tablemalikmail.component';
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
      component: SmartTablemalikComponent,
    },
    {
      path: 'smart-tablemalikc',
      component: SmartTablemalikcComponent,
    },
    {
      path: 'smart-tablemaliku',
      component: SmartTablemalikuComponent,
    },
    {
      path: 'smart-tablemalikui',
      component: SmartTablemalikuiComponent,
    },
    {
      path: 'smart-tablemalikmail',
      component: SmartTablemalikmailComponent,
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
  SmartTablemalikComponent,
  SmartTablemalikcComponent,
  SmartTablemalikuComponent,
  SmartTablemalikuiComponent,
  SmartTablemalikmailComponent,
  TreeGridComponent,
];
