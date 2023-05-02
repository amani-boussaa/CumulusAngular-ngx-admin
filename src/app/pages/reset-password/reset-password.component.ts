import { Component } from '@angular/core';
import { AuthService } from '../../services/login/auth.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent  {

  messageError: any;
  token: string

  constructor(private aus:AuthService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.token = params.token)
   }

  submit(f:any){
    let data=f.value
    console.log(data)
    data.token = this.token
    this.aus.resetPassword(data).subscribe(
      () => {
      Swal.fire({
        icon: 'success',
        title: 'Password reset successfully',
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
