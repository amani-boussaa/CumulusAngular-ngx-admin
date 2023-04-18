import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumComponent } from './forum.component';
import { ThreadTableComponent } from './thread/thread-table.component';


const routes: Routes = [{
  path: '',
  component: ForumComponent,
  children: [
    {
      path: 'thread',
      component: ThreadTableComponent,
    },
   
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumRoutingModule { }

export const routedComponents = [
  ForumComponent,
  ThreadTableComponent
];
