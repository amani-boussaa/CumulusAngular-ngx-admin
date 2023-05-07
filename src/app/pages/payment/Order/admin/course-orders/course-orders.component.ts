import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../service/orders.service';
import { Order } from '../../model/order';
import { Observable,Subject } from 'rxjs-compat';
import {FormControl,FormGroup,Validators} from '@angular/forms';  


@Component({
  selector: 'ngx-course-orders',
  templateUrl: './course-orders.component.html',
  styleUrls: ['./course-orders.component.scss']
})
export class CourseOrdersComponent implements OnInit {

  constructor(private orderservice:OrdersService) { }  
  
  ordersArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  orders: Observable<Order[]>;  
  order : Order=new Order();  
  deleteMessage=false;  
  orderlist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.orderservice.getAllOrdersWithCourse().subscribe(data =>{  
    this.orders =data;  
    this.dtTrigger.next();  
    })  
  }  

}
