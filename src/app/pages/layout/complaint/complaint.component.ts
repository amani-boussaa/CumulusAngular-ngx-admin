import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Complaint } from '../../../models/complaint';
import { FormGroup, FormControl } from '@angular/forms';
import { ComplaintService } from '../../../services/amani/complaint.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryComplaint } from '../../../models/categorycomplaint';
import { AuthService } from '../../../services/login/auth.service';

@Component({
  selector: 'ngx-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {
  firstForm: FormGroup;
  selectedCategory: CategoryComplaint;
  categoryComplaint: any;
  complaint :Complaint ={
    id: 0,
    description: "",
    status: "",
    categorycomplaint: "",
    user: 0,
    category: ''
  }


  // firstForm: UntypedFormGroup;
  secondForm: UntypedFormGroup;
  thirdForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private complaintsrv: ComplaintService, private aus: AuthService) {
  }

  ngOnInit() {
    this.selectedCategory = CategoryComplaint.Technical;
    this.categoryComplaint = CategoryComplaint;

    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    // this.firstForm = new FormGroup({
    //   'firstCtrl': new FormControl('', [Validators.required])
    // });
    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    // console.log(this.firstForm.value);

    // console.log("hhhhhhh")
    // this.firstForm.markAsDirty();
    // console.log(this.complaint)
  }



  onThirdSubmit() {
    // console.log(this.thirdForm.value);

    this.thirdForm.markAsDirty();
    let data={
      status:"NEW",
      category:this.firstForm.value.firstCtrl,
      description:this.thirdForm.value.thirdCtrl,
      user:this.aus.getLoggedInID()
    }
    console.log(data)
    this.complaintsrv.createComplaint(data).subscribe(
      data=>{
        Swal.fire({
                title: 'Success',
                text: 'You have successfully add complaint',
                icon: 'success',
                confirmButtonText: 'Ok'
              });
      },
      (err:HttpErrorResponse) => {
            Swal.fire({
              title: 'Error',
              text: err.error.message,
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
    )
    // this.aus.login(data).subscribe(
    //   data => {
    //     this.datatoken=data;
    //     this.aus.saveToken(this.datatoken.accessToken);
    //     this.route.navigate(['/pages/dashboard']);
    //     Swal.fire({
    //       title: 'Success',
    //       text: 'You have successfully logged in',
    //       icon: 'success',
    //       confirmButtonText: 'Ok'
    //     });
    //   },
    //   (err:HttpErrorResponse) => {
    //     this.messageError=err.error.message;
    //     Swal.fire({
    //       title: 'Error',
    //       text: this.messageError,
    //       icon: 'error',
    //       confirmButtonText: 'Ok'
    //     });
    //   }
    // );
  }

}
