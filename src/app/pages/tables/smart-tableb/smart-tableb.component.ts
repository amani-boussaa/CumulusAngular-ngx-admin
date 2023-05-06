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
    actions: {
      add: true,
      edit: true,
      delete: true,
    
    },
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
      confirmSave: true,
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
      }, threadCreator: {
        title: 'Thread Creator',
        type: 'html',
        valuePrepareFunction: (cell: any) => ` ${cell.nom} | id : ${cell.id} `
      }, threadTags: {
        title: 'Tags',
        type: 'html',
        valuePrepareFunction: (cell: any) => {
          return cell.map((tag: any) => tag.name).join(', ');
        }},
     
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


  onCreate(event): void {
    console.log(event);}

    onUpdate(event): void {
      console.log("Edit Butoon clicked");
    }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.th.deleteThread(event.data.id).subscribe(() => {
        event.confirm.resolve();
      }, () => {
        event.confirm.reject();
      });
    } else {
      event.confirm.reject();
    }
  }
}
