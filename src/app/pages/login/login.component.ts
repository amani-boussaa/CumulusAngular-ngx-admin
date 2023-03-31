
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/login/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-loginamani',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  datatoken:any
  messageError:any
  constructor(private aus:AuthService,private route:Router) { }

  login(f:any){
    let data=f.value
    this.aus.login(data).subscribe(
      data => {
        this.datatoken=data;
        this.aus.saveToken(this.datatoken.accessToken);
        this.route.navigate(['/dashboard']);
        Swal.fire({
          title: 'Success',
          text: 'You have successfully logged in',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      },
      (err:HttpErrorResponse) => {
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
