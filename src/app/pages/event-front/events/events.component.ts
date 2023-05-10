import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/EventService';
import { EventModel } from '../../../entity/event.model';
import { RegistrationService } from '../../../service/registration.service';
import { RegistrationModel } from '../../../entity/registration.model';
import { Router } from '@angular/router';



@Component({
  selector: 'ngx-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events : EventModel[]=[];
  constructor(private eventService:EventService,private registrationService: RegistrationService,private route:Router) { }
  actualDate:Date;
  

  ngOnInit(): void {
    
    this.eventService.getEvents().subscribe((data)=>{
      this.events = data
      this.actualDate = new Date();
    })
  }
  
  isValid:boolean = true;

  public registerToEvent(idEvent:number):void{
    console.log("hello world")
    const registration = new RegistrationModel();
    let userId = 3;
   // registration.id_registration = idEvent;
    registration.registration_date = new Date();
    registration.user_id = userId;
    
    //console.log(registration);
    this.registrationService.addRegistration(registration,idEvent, userId).subscribe((data)=>{
     this.route.navigateByUrl("/pages/registration/register");
    });
}

checkDate( eventStartDate:Date, actualDate: Date):boolean{
  if(eventStartDate>actualDate)
    return false;
  else
    return true;
}
}
