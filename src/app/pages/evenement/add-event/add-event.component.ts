import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/EventService';

@Component({
  selector: 'ngx-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
  }

}
