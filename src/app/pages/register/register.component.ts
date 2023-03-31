import { Component } from '@angular/core';
import { AuthService } from '../../services/login/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  messageError: string;

  constructor(private aus:AuthService,private router:Router) { }


  register(f:any){
    let data=f.value

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
