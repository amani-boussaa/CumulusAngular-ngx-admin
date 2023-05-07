import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/EventService';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  event!: Event;
  events : Event[] =[];
  eventForm = new FormGroup({
    name_event: new FormControl(),
    start_date: new FormControl(),
    end_date: new FormControl(),
    duree: new FormControl(),
    nb_participant: new FormControl(),
    nb_restant: new FormControl(),
    description: new FormControl(),
  })
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((event)=>this.events = event)
  }

  saveEvent():void{
    this.eventService.addEvent(this.eventForm.value as Event).subscribe(res=>{
      this.event = res;
      this.ngOnInit();
    })
  }

  deleteEvent(eventId:number):void{
    this.eventService.deleteEvent(eventId).subscribe(res=>this.ngOnInit())
  }

}
