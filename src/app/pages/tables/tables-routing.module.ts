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
import { TableAmaniComponent } from './table-amani/table-amani.component';
import { TableamanicomplaintComponent } from './tableamanicomplaint/tableamanicomplaint.component';
import { SmartTablebComponent } from './smart-tableb/smart-tableb.component';
import { SmartTableFrontComponent } from './smart-tableFront/smart-tableFront.component';
import { ViewThreadTagComponent } from './ViewThreadTag/ViewThreadTag.component';
import { ViewThreadDetailComponent } from './ViewThreadDetail/ViewThreadDetail.component';
import { CreateThreadComponent } from './CreateThread/createThread.component';
import { MyThreads } from './myThreads/myThreads.component';
import { ThreadStatsComponent } from './ThreadStats/ThreadStats.component';
import { BOComponent } from './BO/BO.component';

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
     },
    {
      path: 'users',
      component: TableAmaniComponent,
    },
    {
      path: 'complaints',
      component: TableamanicomplaintComponent,
    },
    {
      path:'viewThreadDetail',component:ViewThreadDetailComponent},
    {
      path: 'createThread',
      component:   CreateThreadComponent,
    },
     {
      path: 'myThreads',
      component:   MyThreads,
    },   {
      path: 'threadStats',
      component:   ThreadStatsComponent,
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
  SmartTablebComponent,
  SmartTableFrontComponent,
  ViewThreadTagComponent,ViewThreadDetailComponent,CreateThreadComponent,MyThreads,ThreadStatsComponent

];
