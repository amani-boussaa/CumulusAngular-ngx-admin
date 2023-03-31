import { Component } from '@angular/core';
import { AuthService } from '../../services/login/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent  {
  messageError: any;

  constructor(private aus:AuthService,private route:Router) { }

  submit(f:any){
    let data=f.value
    console.log(data)
    this.aus.sendPasswordResetEmail(data).subscribe(
      () => {
      Swal.fire({
        icon: 'success',
        title: 'Password reset email sent',
        showConfirmButton: false,
        timer: 1500
      });
    },
    (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.error.message,
        confirmButtonText: 'OK'
      });
    })
  }

}
