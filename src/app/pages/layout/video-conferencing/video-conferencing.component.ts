import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { JitsiService } from '../../../services/amani/jitsi.service';

 @Component({
  selector: 'ngx-video-conferencing',
  templateUrl: './video-conferencing.component.html',
  styleUrls: ['./video-conferencing.component.scss']
})
export class VideoConferencingComponent implements OnInit {

  constructor(private router: Router, private jitsiService: JitsiService) {}
  ngOnInit(): void {
    this.jitsiService.moveRoom(this.jitsiService.namePrincipalRoom, true);
  }

  executeCommand(data) {
    console.log(
      'this.jitsiService.getParticipants():',
      this.jitsiService.getParticipants()
    );

    this.jitsiService.api.executeCommand(
      'sendEndpointTextMessage',
      this.jitsiService.getParticipants(),
      'mover a principal'
    );
  }
}
