import { Component } from "@angular/core";
  import { LocalDataSource } from "ng2-smart-table";

  import { SmartTableData } from "../../../@core/data/smart-table";
  import { UseramaniService } from "../../../services/amani/useramani.service";
  import { Observable } from "rxjs";
  import { toArray } from "rxjs/operators";
  import { Router } from "@angular/router";
  import { ShowDetailsButtonComponentComponent } from "../show-details-button-component/show-details-button-component.component";
import { ComplaintService } from "../../../services/amani/complaint.service";

@Component({
  selector: 'ngx-tableamanicomplaint',
  templateUrl: './tableamanicomplaint.component.html',
  styleUrls: ['./tableamanicomplaint.component.scss']
})
export class TableamanicomplaintComponent  {

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
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },


    columns: {
      id: {
        title: "ID",
        type: "number",
      },
      categorycomplaint: {
        title: "category",
        type: "string",
      },
      user: {
        title: "user",
        type: "string",
      },
      status: {
        title: "status",
        type: "string",
      },
      description: {
        title: "description",
        type: "number",
      },
      // details: {
      //   title: 'Details',
      //   type: 'custom',
      //   renderComponent: ShowDetailsButtonComponentComponent,
      //   filter: false,
      //   sort: false,
      // },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private us: ComplaintService, private router:Router) {

    const data: Observable<Object> = this.us.getAllComplaints();
    data.pipe(toArray()).subscribe((dataArray: any[]) => {
      const dataArray2 = [];

      for (let i = 0; i < dataArray[0].length; i++) {
        const data = dataArray[0][i];
        const newData = {
          categorycomplaint: data.categorycomplaint,
          description: data.description,
          id: data.id,
          status: data.status,
          user: data.user.name
        };
        dataArray2.push(newData);
      }


        this.source.load(dataArray2);


    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.us.deletecomplaint(event.data.id).subscribe(() => {
        event.confirm.resolve();
      }, () => {
        event.confirm.reject();
      });
    } else {
      event.confirm.reject();
    }
  }
  onEditConfirm(event): void {
    console.log(event)
    const updatedEntity = {
      name: event.newData.name,
      username: event.newData.username,
      email: event.newData.email,
    };

    this.us.updateComplaint(event.data.id, updatedEntity).subscribe(() => {

      event.confirm.resolve(updatedEntity);
    }, () => {

      event.confirm.reject();
    });
  }
  onCustomAction(event) {
    if (event.action === 'show') {
      // navigate to your profile component
      this.router.navigate(['/pages/forms/profile', event.data.id]);
    }
  }
  ShowButtonComponent(row) {
    return `<a href="/users/${row.data.id}" class="btn btn-primary">Show</a>`;
  }
}
