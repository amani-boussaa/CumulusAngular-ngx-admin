import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../service/registration.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationModel } from '../../../entity/registration.model';
@Component({
  selector: 'ngx-edit-registration',
  templateUrl: './edit-registration.component.html',
  styleUrls: ['./edit-registration.component.scss']
})
export class EditRegistrationComponent implements OnInit {

  Registration! :RegistrationModel;
  editRegistrationForm = new FormGroup({
    name_registration: new FormControl(),
    id_registration:new FormControl(),
    registration_date:new FormControl(),
    event: new FormControl(),
  })
  idRegistration!:number;
  constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private route: ActivatedRoute
    ) {

   }

   public editRegistration():void{
     let idRegistration = this.route.snapshot.paramMap.get('idRegistration');
    this.registrationService.updateRegistration(parseInt(idRegistration), 
      this.editRegistrationForm.value as RegistrationModel)
      .subscribe(
        (res)=>{
           this.router.navigateByUrl("/pages/evenement/registration"); //mauvaise rédirection
        }
      )
   }
   
  ngOnInit(): void {
    let idRegistration = this.route.snapshot.paramMap.get('idRegistration');
    // this.registrationService.retrieveRegistration(parseInt(idRegistration)).subscribe(res=>{
    //   this.registration = res;
    //   console.log(this.registration);
    //   this.editRegistrationForm.patchValue;
    
    // })
  }

  

}
