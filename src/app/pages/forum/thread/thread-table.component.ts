import { Component , OnInit, Input, Output, EventEmitter,ViewChild } from '@angular/core';
import { LocalDataSource ,ViewCell } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { ButtonsComponent } from '../../forms/buttons/buttons.component';
import { ThreadService } from '../../../services/ThreadService';
import { Observable } from 'rxjs-compat';
import { toArray } from "rxjs/operators";
import  axios  from 'axios';



@Component({
  selector: 'button-view',
  template: `
   <button (click)="openFileExplorer()">Choose File</button>
<input type="file" #fileInput style="display:none" (change)="onFileSelected($event)">
  `,
}) class ButtonViewComponent implements ViewCell, OnInit {
  renderValue="asdas";
  @ViewChild('fileInput') fileInput: any;
  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }
  openFileExplorer() {
    this.fileInput.nativeElement.click();
  } onFileSelected(event: any) {
    const file: File = event.target.files[0];
    
 
  }





  onClick() {
    this.save.emit(this.rowData);
  }
}

@Component({
  selector: 'thread-table',
  templateUrl: './thread-table.component.html',
  styleUrls: ['./thread-table.component.scss'],
})
export class ThreadTableComponent implements OnInit {



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
      content: {
        title: 'Content',
        type: 'string',
      },
      nom: {
        title: 'Creator',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'string',
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.firstName} saved!`)
          });
        }}
    
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private threadService:ThreadService ) {
     const data = this.service.getData();
   
     var date= this.threadService.getAllthreads();
      date[0].forEach(element => {
        console.log(element);
        
      });
   
     console.log("DATA" );
   
     this.source.load(data); 
   
    
   
    
  }
  ngOnInit() {

var date= this.threadService.getAllthreads();
console.log(typeof(date));
    this.source.load([date]); 



    // const data: Observable<Object> = this.threadService.getAllthreads();
    // data.pipe(toArray()).subscribe((dataArray: any[]) => {
    //   console.log(dataArray[0]);
    //   this.source.load(dataArray[0]);
    // });

  
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
