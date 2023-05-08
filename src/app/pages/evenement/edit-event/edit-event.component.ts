import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/EventService';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  editEventForm = new FormGroup({
    ame_event: new FormControl(),
    start_date: new FormControl(),
    end_date: new FormControl(),
    duree: new FormControl(),
    nb_participant: new FormControl(),
    nb_restant: new FormControl(),
    description: new FormControl(),
  })

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
    ) {

   }

   public editEvent():void{
    const idEvent:any = this.route.snapshot.paramMap.get('idEvent')!;
    this.eventService.updateEvent(idEvent, 
      this.editEventForm.value as Event)
      .subscribe(
        (res)=>{
           this.router.navigateByUrl("/pages/evenement/event");
        }
      )
   }

  ngOnInit(): void {
    
  }

}
