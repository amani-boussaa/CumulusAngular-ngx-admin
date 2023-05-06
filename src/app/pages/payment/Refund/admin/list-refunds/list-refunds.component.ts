import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RefundService } from '../../service/refund.service';  
import { Refund } from '../../model/refund';  
import { Observable,Subject } from "rxjs";  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'ngx-list-refunds',
  templateUrl: './list-refunds.component.html',
  styleUrls: ['./list-refunds.component.scss']
})
export class ListRefundsComponent implements OnInit {

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;

  constructor(private refundservice:RefundService,private windowService: NbWindowService) { }  

  
  refundsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  refunds: Observable<Refund[]>;  
  refund : Refund=new Refund();  
  deleteMessage=false;  
  refundlist:any;  
  isupdated = false;      

  successMessage: string | null = null;
  errorMessage: string | null = null;

  refundToUpdate: Refund;
isUpdateFormVisible = false;

   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.refundservice.getRefundList().subscribe(data =>{  
    this.refunds =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteRefund(id: String) {  
    this.refundservice.deleteRefund(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.refundservice.getRefundList().subscribe(data =>{  
            this.refunds =data  
            })  
        },  
        error => console.log(error));  
  }  
  
showUpdateForm(refund: Refund,contentTemplate) {
  this.windowService.open(
    contentTemplate,
    {
      title: 'Update Refund',
    },
  );
  this.refundToUpdate = refund;
  this.isUpdateFormVisible = true;
}

hideUpdateForm() {
  this.isUpdateFormVisible = false;
}

updateRefund() {
  this.refundservice.updateRefund(this.refundToUpdate.refund_id, this.refundToUpdate)
    .subscribe(
      data => {
        this.isupdated = true;
        this.refundservice.getRefundList().subscribe(data => {
          this.refunds = data;
          this.successMessage = 'Updated successfully!';
          this.errorMessage = null;
        });
      },
      error => {
        console.log(error);
        this.successMessage = null;
        this.errorMessage = 'Error Updating!';
      }
      );
}
}
