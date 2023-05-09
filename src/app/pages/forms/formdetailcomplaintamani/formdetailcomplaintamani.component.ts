import { Component, OnInit } from '@angular/core';
import { Complaint } from '../../../models/complaint';
import Swal from 'sweetalert2';
import { ComplaintService } from '../../../services/amani/complaint.service';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-formdetailcomplaintamani',
  templateUrl: './formdetailcomplaintamani.component.html',
  styleUrls: ['./formdetailcomplaintamani.component.scss']
})
export class FormdetailcomplaintamaniComponent implements OnInit {
  ngOnInit(): void {
    this.route.params.subscribe(params => this.complaint.id = params.id)

    if (this.complaint.id!=null) {
      this.cpsrv.getComplaintById(this.complaint.id).subscribe(
        (response:any)=>{
          this.complaint.id = response.id
          this.complaint.description = response.description
          this.complaint.status = response.status
          this.complaint.user = response.user
          this.complaint.category = response.category
          this.complaint.categorycomplaint = response.categorycomplaint
        }
      )
    }
  }
  constructor(private cpsrv: ComplaintService,private route: ActivatedRoute) { }
  complaint: Complaint = {
    id: 0,
    description: "",
    status: "",
    categorycomplaint: "",
    user: 0,
    category: "",
  }

  onSubmit() {
    // let updatedcomplaint = this.complaint
    let newData = {
      status: this.complaint.status,
    }
    const id = this.complaint.id;

    this.cpsrv.updateComplaint(id, newData).subscribe(
      (data:any) => {
        this.complaint = data;
        Swal.fire({
          icon: 'success',
          title: 'Complaint updated successfully!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User update failed!',
          footer: error.message
        });
      }

    );


  }
}
