import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { ThreadService } from '../../../Service/Thread.Service';

@Component({
  selector: 'ngx-smart-tableb',
  templateUrl: './smart-tableb.component.html',
  styleUrls: ['./smart-tableb.component.scss'],
})
export class SmartTablebComponent {
  data: any[];
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },   
      title: {
        title: 'title',
        type: 'string',
      },   
      content: {
        title: 'content',
        type: 'string',
      },   
         threadCreator: {
          title: 'Creator',
          type: 'string',}
      // },
      // lastName: {
      //   title: 'Last Name',
      //   type: 'string',
      // },
      // username: {
      //   title: 'Username',
      //   type: 'string',
      // },
      // email: {
      //   title: 'E-mail',
      //   type: 'string',
      // },
      // age: {
      //   title: 'Age',
      //   type: 'number',
      // },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor( private th:ThreadService ) {
     this.th.getAllthreads().subscribe((data) => {
     
  console.log(data);
    this.source.load(data)
  
});
    console.log( );

  
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
