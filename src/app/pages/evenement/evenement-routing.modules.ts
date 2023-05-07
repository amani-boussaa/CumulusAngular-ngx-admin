import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvenementComponent } from './evenement.component';
import { ListEventComponent } from './list-event/list-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
//import { EventTableComponent } from './event/event-table.component';


const routes: Routes = [{
  path: '',
  component: EvenementComponent,
 children: [
    {path: 'event', component: ListEventComponent},
    {path: "add-event", component: AddEventComponent},
    {path : "edit-event", component: EditEventComponent}

   
 ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvenementRoutingModule { }

export const routedComponents = [
  EvenementComponent,
  //EventTableComponent,
  
];
