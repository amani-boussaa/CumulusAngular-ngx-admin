import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { ThreadService } from '../../../Service/Thread.Service';
import { Thread } from '../../../Entity/Thread';
import { User } from '../../../Entity/User';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-smart-tableb',
  templateUrl: './smart-tableb.component.html',
  styleUrls: ['./smart-tableb.component.scss'],
})
export class SmartTablebComponent {
  createThread:Thread = new Thread();
  
  createTags:string = "";
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
        valuePrepareFunction: (cell: any) => ` ${cell.id} | id : ${cell.nom} `,
        
        
      }, threadTags: {
        title: 'Tags',
        type: 'html',
        valuePrepareFunction: (cell: any) => {
          return cell.map((tag: any) => tag.name).join(', ');
        }},
     
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor( private th:ThreadService ,private toastrService: NbToastrService) {
     this.th.getAllthreads().subscribe((data) => {
     
  console.log(data);
    this.source.load(data)
  
});
    console.log( );

  
  }


  onCreate(event): void {

 
    
    this.createThread.settitle(event.newData.title)
   this.createThread.setcontent(event.newData.content)
   this.createThread.setthreadCreator(new User(event.newData.threadCreator));
  this.createTags = this.removeLastSpaces(event.newData.threadTags);

  
  if (!this.createThread.gettitle() || !this.createThread.getcontent() || !this.createThread.getthreadCreator() || !this.createTags) {
    this.toastrService.danger('Verify Fields ' ,"Empty", { icon: 'alert-triangle-outline', preventDuplicates: true, limit: 3 });
    
  }else if (isNaN(Number( this.createThread.getthreadCreator().id))) {
    this.toastrService.danger('Id creator must be a number ' ,"ID", { icon: 'alert-triangle-outline', preventDuplicates: true, limit: 3 });
  
}else{
this.th.createThreadWithTags(this.createThread,this.createTags).subscribe((data) => {
     
  console.log(data);
  
  
});;

console.log("sent");



}

 
 
  

    }

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

   removeLastSpaces(input: string): string {
    const lastCommaIndex = input.lastIndexOf(',');
    if (lastCommaIndex === input.length - 1) {
      input = input.slice(0, lastCommaIndex);
    }
  
    // Remove any trailing spaces
    return input.trimEnd();
  }
}
