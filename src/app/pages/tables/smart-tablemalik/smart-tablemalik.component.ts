import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { CertifService } from '../../../certif.service';

@Component({
  selector: 'ngx-smart-tablemalik',
  templateUrl: './smart-tablemalik.component.html',
})
export class SmartTablemalikComponent {

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
      }
    },
  };
  

  source: LocalDataSource = new LocalDataSource();

  constructor(private certifService: CertifService) {
    this.certifService.getAllCertifs().subscribe(data => {
      this.source.load(data);
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
