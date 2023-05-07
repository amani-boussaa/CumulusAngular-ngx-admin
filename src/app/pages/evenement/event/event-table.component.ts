/*import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/EventService';
import { Event } from '../models/event';
import { LocalDataSource ,ViewCell } from 'ng2-smart-table';
import { ActivatedRoute } from '@angular/router';
import { SmartTableData } from '../../../@core/data/smart-table';
@Component({
  selector: 'ngx-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss']
})
export class EventComponent implements OnInit {

  events :Event[] =[]

  constructor(private eventService: EventService, private routeActivated: ActivatedRoute) { }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name_event: {
        title: 'event Name',
        type: 'string',
      },
      nb_participant: {
        title: 'nb_participant',
        type: 'number',
      },
      nb_restant: {
        title: 'nb_restant',
        type: 'number',
      },
      start_date: {
        title: 'start_date',
        type: 'date',
      },
      end_date: {
        title: 'end_date',
        type: 'date',
      },
      duree: {
        title: 'Duree',
        type: 'number',
      },
      description: {
        title: 'description',
        type: 'string',
      },
    },
  };

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(){
    this.eventService.getEvenements().subscribe({
     next: (data)=>{
      this.events=data;
      console.log(this.events);
      
    },
     error:(error)=>{console.log(error);
     }
    })
  }

  onDeleteConfirm(event): void {
    this.eventService.deleteEvenement(event.data.id).subscribe( res=>{ 
      console.log(res);
      
       if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve(event.source.data);
      } else {
        event.confirm.reject();
      }
    })
  }

}*/
