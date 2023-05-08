import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/EventService';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from '../../../entity/event.model';

@Component({
  selector: 'ngx-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  event!:EventModel;
  editEventForm = new FormGroup({
    name_event: new FormControl(),
    start_date: new FormControl(),
    end_date: new FormControl(),
    duree: new FormControl(),
    nb_participant: new FormControl(),
    nb_restant: new FormControl(),
    description: new FormControl(),
  })
  idEvent!:number;
  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
    ) {

   }

   public editEvent():void{
     let idEvent = this.route.snapshot.paramMap.get('idEvent');
    this.eventService.updateEvent(parseInt(idEvent), 
      this.editEventForm.value as Event)
      .subscribe(
        (res)=>{
           this.router.navigateByUrl("/pages/evenement/event"); //mauvaise rédirection
        }
      )
   }
   
  ngOnInit(): void {
    let idEvent = this.route.snapshot.paramMap.get('idEvent');
    this.eventService.retrieveEvent(parseInt(idEvent)).subscribe(res=>{
      this.event = res;
      console.log(this.event);
      this.editEventForm.patchValue;
    
    })
  }

}
