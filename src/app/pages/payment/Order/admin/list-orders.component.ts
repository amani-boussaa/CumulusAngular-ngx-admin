import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { LocalDataSource } from 'ng2-smart-table';

import * as moment from 'moment';

import { SmartTableData } from '../../../../@core/data/smart-table';
import { OrdersService } from '../service/orders.service';  
import { Order } from '../model/order';  

@Component({
  selector: 'ngx-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit{
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmUpdate: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      order_id: {
        title: 'Order ID',
        type: 'string',
      },
      amount: {
        title: 'Amount',
        type: 'number',
      },
      currency: {
        title: 'Currency',
        type: 'string',
      },
      status: {
        title: 'Status',
        //type: 'string',
        type: 'html',
          valuePrepareFunction: (cell, row) => {
            if (cell === 'succeeded') {
              return '<span class="badge badge-success">Success</span>';
            } else if (cell === 'failed') {
              return '<span class="badge badge-danger">Failed</span>';
            }
            else if (cell === 'refunded') {
              return '<span class="badge badge-info">refunded</span>';
            } else {
              return cell;
            }
          
        },
      },
      type: {
        title: 'Type',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          if (cell === 'Coins') {
            return '<i class="fas fa-coins"></i> ' + cell;
          } else {
            return cell;
          }
  },
      },
      user: {
        title: 'Username',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          return row.user?.username;
        },
      },
      // date_created: {
      //   title: 'Date Created',
      //   type: 'datetime',
      //   valuePrepareFunction: (datetime) => {
      //     const newDate = new Date(Date.parse(datetime));
      //     return newDate.toLocaleString();
      //   },
      // },
      // date_updated: {
      //   title: 'Date Updated',
      //   type: 'date',
      // },
    },
  };

  orders: Order[];
source: LocalDataSource;
orderForm: FormGroup;

constructor(private ordersService: OrdersService) { }

ngOnInit(): void {
this.orderForm = new FormGroup({
order_id: new FormControl(),
amount: new FormControl(),
currency: new FormControl(),
type: new FormControl(),
status: new FormControl(),
date_created: new FormControl(),
date_updated: new FormControl(),
user: new FormControl()

});
this.ordersService.getOrderList().subscribe((data: Order[]) => {
  this.orders = data;
  console.log(this.orders); // add this line to print the orders to the console
  this.source = new LocalDataSource(data);
});
}
onDeleteConfirm(event): void {
  if (window.confirm('Are you sure you want to delete?')) {
  this.ordersService.deleteOrder(event.data.order_id).subscribe((data) => {
  event.confirm.resolve();
  }, (error) => {
  console.log(error);
  event.confirm.reject();
  });
  } else {
  event.confirm.reject();
  }
  }
  
  onUpdateConfirm(event): void {
  const order: Order = {
  order_id: event.newData.order_id,
  amount: event.newData.amount,
  currency: event.newData.currency,
  type: event.newData.type,
  status: event.newData.status,
  date_created : event.newData.date_created,
  date_updated : event.newData.date_updated,
  user: event.newData.user
  };
  this.ordersService.updateOrder(event.newData.order_id, order).subscribe((data) => {
    event.confirm.resolve(data);
  }, (error) => {
    console.log(error);
    event.confirm.reject();
  });
}
onCreateConfirm(event): void {
  const order: Order = {
  order_id: event.newData.order_id,
  amount: event.newData.amount,
  currency: event.newData.currency,
  type: event.newData.type,
  status: event.newData.status,
  date_created : event.newData.date_created,
  date_updated : event.newData.date_updated,
  user: event.newData.user
  };

  this.ordersService.createOrder(order).subscribe((data) => {
    event.confirm.resolve(data);
  }, (error) => {
    console.log(error);
    event.confirm.reject();
  });
}

}
