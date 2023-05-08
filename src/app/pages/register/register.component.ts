import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/login/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Role } from '../../models/role';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  messageError: string;
  role: any;
  selectedRole: string = Role.ROLE_STUDENT;
  // SelectedCountryISOCode: string = "TN";
  constructor(private aus:AuthService,private router:Router) {

   }
   ngOnInit() {
    this.role = Role
   }

  register(f:any){
    let data=f.value
    // data.phonenumber = data.phonenumber.Number

    this.aus.register(data).subscribe(
      data => {
        this.router.navigate(['/auth/login']);
        Swal.fire({
          title: 'Success',
          text: 'You have successfully registered ! Please verify your email',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        console.log(data);
      },
      (err:HttpErrorResponse) => {
        console.log(err);
        this.messageError=err.error.message;
        Swal.fire({
          title: 'Error',
          text: this.messageError,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    );


  }
}
