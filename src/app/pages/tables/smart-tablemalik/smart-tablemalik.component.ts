import { SmartTableData } from '../../../@core/data/smart-table';
import { CertifService } from '../../../certif.service';
import { Component , OnInit, Input, Output, EventEmitter, ViewChild, OnChanges} from '@angular/core';
import { LocalDataSource ,ViewCell } from 'ng2-smart-table';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-button-view',
  template: 
   `<button (click)="openFileExplorer()" class="upload-btn">Upload certif</button>
   <input type="file" #fileInput style="display:none" (change)="onFileSelected($event)">
   
   <style>
     /* Button styling */
     .upload-btn {
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
       box-shadow: 0 5px #2E8B57; /* Add 3D shadow effect */
     }
   
     .upload-btn:hover {
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
  renderValue="asdas";
  certifId: number;
  isUploaded = false;
  @ViewChild('fileInput') fileInput: any;
  @Input() value: string | number;
  @Input() rowData: any;
  file: File;
  @Output() save: EventEmitter<any> = new EventEmitter();
  constructor( private http: HttpClient , private certifService: CertifService,private toastr: ToastrService) {
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
    const url = `${environment.urlBackend}`+`${this.rowData.id}/file`;

    const formData = new FormData();
    formData.append('file', file);
      this.certifService.uploadFile(this.rowData.id,file).subscribe(data => {
         });
    
     this.toastr.success('PDF file uploaded successfully');

      
  }
 
  onClick() {
    this.save.emit(this.rowData);
  }
  
 
}

@Component({
  selector: 'ngx-smart-tablemalik',
  templateUrl: './smart-tablemalik.component.html',
})
export class SmartTablemalikComponent implements OnInit {
  chart: any;
  source1: LocalDataSource = new LocalDataSource();
  blobs: any;


  ngOnInit() {
    // Fetch the certificates data from the CertifService
    this.certifService.getAllCertifs().subscribe((certifs) => {
      // Extract the prices of the certificates from the data
      const prices = certifs.map((certif) => certif.price);
      const names = certifs.map((certif) => certif.name);

      // Set up the chart with the extracted prices
      this.chart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: names,
          datasets: [
            {
              label: 'Prices',
              data: prices,
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

  public numOfCertifs: number;
  public path: any;
  certifId: number;
  file: File;

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

  constructor(private certifService: CertifService) {
    this.certifService.getAllCertifs().subscribe(data => {
      this.numOfCertifs = data.length;
      this.source.load(data);
     

      console.log(data);

        
   
    });
  }

  
  onAddConfirm(event): void {
    console.log('Create button clicked');
    // create the new certif using the form data
    const newCertif = {
      name: event.newData.name,
      description: event.newData.description,
      price: event.newData.price,
    };
    
    this.certifService.createCertif(newCertif).subscribe((createdCertif) => {
      // update the table with the newly created certif
      event.confirm.resolve(createdCertif);
    }, () => {
      // something went wrong with the creation
      event.confirm.reject();
    });
  }
  

  onEditConfirm(event): void {
    // update the certif using the form data
    const updatedCertif = {
      name: event.newData.name,
      description: event.newData.description,
      price: event.newData.price,
    };
  
    this.certifService.updateCertif(event.data.id, updatedCertif).subscribe(() => {
      // update the table with the newly updated certif
      event.confirm.resolve(updatedCertif);
    }, () => {
      // something went wrong with the update
      event.confirm.reject();
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.certifService.deleteCertif(event.data.id).subscribe(() => {
        event.confirm.resolve();
      }, () => {
        event.confirm.reject();
      });
    } else {
      event.confirm.reject();
    }
  }
}
