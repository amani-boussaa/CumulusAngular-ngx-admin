import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../service/registration.service';
import { RegistrationModel } from '../../../entity/registration.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrations :RegistrationModel[] = [];
  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationService.getRegistrations().subscribe(
      (data)=>this.registrations = data
    );

  }

  public deleteRegistration(idRegistration:number):void{
      this.registrationService.deleteRegistration(idRegistration).subscribe(
        res=>this.ngOnInit()
      )
  }

}
