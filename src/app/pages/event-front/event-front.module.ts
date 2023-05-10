import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventFrontRoutingModule } from './event-front-routing.module';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventFrontRoutingModule
  ]
})
export class EventFrontModule { }
