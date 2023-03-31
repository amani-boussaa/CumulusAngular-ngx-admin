import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { CourseService } from '../../../course.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-smart-tablemalikc',
  templateUrl: './smart-table.componentmalikc.html',
})
export class SmartTableComponentmalikc {
  private baseUrl = 'http://localhost:8081/CUMULUS/courses';
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
        editable: false,
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      instructor: {
        title: 'instructor',
        type: 'string',
      }
   
    },
  };
  

  source: LocalDataSource = new LocalDataSource();

  constructor(private courseService: CourseService , private http: HttpClient) {
    this.courseService.getAllCourses().subscribe(data => {
      this.source.load(data);
    });
  }

  
  onAddConfirm(event): void {
    console.log('Create button clicked');
    
    const newCourse = {
      id: 0, // add the id property with a default value of 0
      name: event.newData.name,
      description: event.newData.description,
      price: event.newData.price,  
      instructor: event.newData.instructor
    };
    
    this.courseService.createCourse(newCourse).subscribe((createdCourse) => {
  
      event.confirm.resolve(createdCourse);
    }, () => {
      // something went wrong with the creation
      event.confirm.reject();
    });
  }

  

  onEditConfirm(event): void {
 
    const updatedCourse = {
      name: event.newData.name,
      description: event.newData.description,
      price: event.newData.price,
      instructor: event.newData.instructor
    };
  
    this.courseService.updateCourse(event.data.id, updatedCourse).subscribe(() => {
     
      event.confirm.resolve(updatedCourse);
    }, () => {
      
      event.confirm.reject();
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.courseService.deleteCourse(event.data.id).subscribe(() => {
        event.confirm.resolve();
      }, () => {
        event.confirm.reject();
      });
    } else {
      event.confirm.reject();
    }
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.uploadFile(file);
  }
  
  uploadFile(file: File): void {
    const formData = new FormData();
    formData.append('file', file);
  
    this.http.post<any>(`${this.baseUrl}/uploadFile`, formData).subscribe(
      response => {
        console.log('Upload successful:', response);
      },
      error => {
        console.error('Upload error:', error);
      }
    );
  }
}
