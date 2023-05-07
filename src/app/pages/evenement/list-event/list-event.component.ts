import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/EventService';

@Component({
  selector: 'ngx-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  events : Event[] =[];
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((event)=>this.events = event)
  }

}
