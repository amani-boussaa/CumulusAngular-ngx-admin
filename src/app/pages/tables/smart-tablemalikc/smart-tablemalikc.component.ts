import { Component , OnInit, Input, Output, EventEmitter, ViewChild, OnChanges} from '@angular/core';
import { LocalDataSource ,ViewCell } from 'ng2-smart-table';

import { CourseService } from '../../../course.service';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'button-view',
  template: 
   `<button (click)="openFileExplorer()">Upload course</button>
   <input type="file" #fileInput style="display:none" (change)="onFileSelected($event)">
   
   
   
   <style>
     /* Button styling */
     button {
       background-color: #4CAF50;
       border: none;
       color: white;
       padding: 10px 20px;
       text-align: center;
       text-decoration: none;
       display: inline-block;
       font-size: 16px;
       margin: 4px 2px;
       cursor: pointer;
       border-radius: 4px;
     }
   
     button:hover {
       background-color: #2E8B57; /* Darker green */
     }
   
     /* Message styling */
     p.success-message {
       color: green;
       margin-top: 10px;
       display: none;
     }
   
     p.show {
       display: block;
     }
   </style>`
  ,
}) class ButtonViewComponent implements ViewCell, OnInit {
  private baseUrl = 'http://localhost:8081/CUMULUS/courses';
  renderValue="asdas";
  courseId: number;
  isUploaded = false;
  @ViewChild('fileInput') fileInput: any;
  @Input() value: string | number;
  @Input() rowData: any;
  file: File;
  @Output() save: EventEmitter<any> = new EventEmitter();
  constructor( private http: HttpClient , private courseService: CourseService, private toastr: ToastrService) {
  }
  handleFileInput(event: any) {
    this.file = event.target.files[0];
  }
  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }
  openFileExplorer() {
    this.fileInput.nativeElement.click();
  } onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const url = `${this.baseUrl}/${this.rowData.id}/file`;

    const formData = new FormData();
    formData.append('file', file);
    console.log(file);
      console.log(this.http.post(url, formData));
      this.courseService.uploadFile(this.rowData.id,file).subscribe(data => {
        console.log(data);
        setTimeout(() => {
          this.isUploaded = true;
    
          // Hide the message after 3 seconds
          setTimeout(() => {
            this.isUploaded = false;
          }, 3000);
        }, 2000);
       

      });
      this.toastr.success('PDF file uploaded successfully');
         
     
      
  }
 
  onClick() {
    this.save.emit(this.rowData);
  }
  
 
}

@Component({
  selector: 'ngx-smart-tablemalikc',
  templateUrl: './smart-tablemalikc.component.html',
})
export class SmartTablemalikcComponent implements OnInit , OnChanges {
  chart: any;
  source1: LocalDataSource = new LocalDataSource();
  data: any;

  ngOnInit() {
    this.http.get('http://localhost:8081/CUMULUS/courses/getAllCourses').subscribe((data) => {
      this.data = data;

      this.chart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: this.data.map((d: any) => d.name),
          datasets: [
            {
              label: 'Price',
              data: this.data.map((d: any) => d.price),
              backgroundColor: '#0196FD',
              borderColor: '#0196FD',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
  }

  ngOnChanges() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: this.data.map((d: any) => d.name),
          datasets: [
            {
              label: 'Price',
              data: this.data.map((d: any) => d.price),
              backgroundColor: '#0196FD',
              borderColor: '#0196FD',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }

  public numOfCourses: number;
  courseId: number;
  file: File;
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
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.id} saved!`)
          });
        }}
    },
  };
  

  source: LocalDataSource = new LocalDataSource();
  files:[];
  pdfUrl: string
  blobs : any [] = [];
  pdfUrls: string[] = [];

  
  
  constructor(private courseService: CourseService , private http: HttpClient) {
   
    this.courseService.getAllCourses().subscribe(data => {
      this.source.load(data);
      this.numOfCourses = data.length;
      console.log(data);
      
      for (let index = 0; index < data.length; index++) {
       
        this.courseService.getFile(data[index].id).subscribe(async data => {
          // console.log("file data" ,data);
          var file = new Blob([data], {type: 'application/pdf'});
          var fileURL = URL.createObjectURL(file);
          const fr = new FileReader()
          fr.readAsDataURL(file)
          fr.addEventListener('load', () => {
           
            this.blobs.push(fr.result)
          })
          
          
         
        });
      }
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
    console.log("cliccccckkkkk")
    const file: File = event.target.files[0];
    
    // use the stored course ID to call the uploadFile() method
    if (this.courseId && file) {
      this.courseService.uploadFile(this.courseId, file).subscribe(
        response => {
          console.log('Upload successful:', response);
        },
        error => {
          console.error('Upload error:', error);
        }
      );
    }
  }
  onCourseSelect(event: any): void {
    this.courseId = event.data.id;
  }
 
  uploadFile(id: number, file: File) {
    const url = `${this.baseUrl}/${id}/file`;

    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(url, formData);
  }


  getPdf(id: number): void {
    this.courseService.getFile(id).subscribe(blob => {
      this.pdfUrl = URL.createObjectURL(blob);
    });
  }
  getPdfUrl(): string {
    return this.pdfUrl;
  }
}
