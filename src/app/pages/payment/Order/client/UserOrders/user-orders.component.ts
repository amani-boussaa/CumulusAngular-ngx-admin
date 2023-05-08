import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Observable,Subject } from "rxjs";  
import {FormControl,FormGroup,NgForm,Validators} from '@angular/forms';  
import { NbWindowService, NbWindowRef } from '@nebular/theme';


import { OrdersService } from '../../service/orders.service';  
import { Order } from '../../model/order';  
import { Refund } from '../../../Refund/model/refund';
import { RefundService } from '../../../Refund/service/refund.service';

@Component({
  selector: 'ngx-list-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class ListUserOrdersComponent implements OnInit{
 

constructor(private ordersService: OrdersService,private refundservice: RefundService,private windowService: NbWindowService) { }

ordersArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  orders: Observable<Order[]>;  
  order : Order=new Order();  
  refund : Refund=new Refund();
  deleteMessage=false;  
  orderlist:any;  
  submitted = false;  
  isRefundFormVisible = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  windowRef: NbWindowRef;

  connect_user_id: number = 1;

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
   
  
  ngOnInit() {  
    this.submitted=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.ordersService.getUserOrderList(this.connect_user_id).subscribe(data =>{  
    this.orders =data;  
    this.dtTrigger.next();  
    })  
  }  



  refundsaveform=new FormGroup({  
    refund_reason:new FormControl('' , [Validators.required , Validators.minLength(5) ] )  
  });  

  showRefundForm(contentTemplate,order) {
    this.order = order; // Assign the order object to the component's order property
    this.windowRef = this.windowService.open(
      contentTemplate,
      {
        title: 'Request a refund',
      },
    );
    this.isRefundFormVisible = true;
  }

  saveRefund(saveRefund) {  
    this.refund=new Refund();     
    this.refund.reason=this.RefundReason.value;  
    this.submitted = true;  
    this.RefundOrder();  
  } 

  get RefundReason(){  
    return this.refundsaveform.get('refund_reason');  
  }  
  

  RefundOrder()
  {
    this.refundservice.createRefund(this.refund,this.order.order_id).subscribe(
      (response) => {
        // Exam Voucher redeemed successfully
        this.windowRef.close();
        console.log(response);
          this.successMessage = 'Request added successfully!';
          this.errorMessage = null;
      },
      (error) => {
          // error occurred
          console.log("Something went wrong");
          this.successMessage = null;
          this.errorMessage = 'Something went wrong!';
      }
    );
    this.refund = new Refund(); 
  }


}
