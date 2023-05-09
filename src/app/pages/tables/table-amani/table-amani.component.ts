  import { Component } from "@angular/core";
  import { LocalDataSource } from "ng2-smart-table";

  import { SmartTableData } from "../../../@core/data/smart-table";
  import { UseramaniService } from "../../../services/amani/useramani.service";
  import { Observable } from "rxjs";
  import { toArray } from "rxjs/operators";
  import { Router } from "@angular/router";
  import { ShowDetailsButtonComponentComponent } from "../show-details-button-component/show-details-button-component.component";
  @Component({
    selector: "ngx-table-amani",
    templateUrl: "./table-amani.component.html",
    styleUrls: ["./table-amani.component.scss"],
  })
  export class TableAmaniComponent {
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
        name: {
          title: "Name",
          type: "string",
        },
        username: {
          title: "Username",
          type: "string",
        },
        email: {
          title: "E-mail",
          type: "string",
        },
        role: {
          title: "Role",
          type: "number",
        },
        details: {
          title: 'Details',
          type: 'custom',
          renderComponent: ShowDetailsButtonComponentComponent,
          filter: false,
          sort: false,
        },

      },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: SmartTableData, private us: UseramaniService, private router:Router) {
      // const data = this.service.getData();
      let donne = this.us.getAllusers();
      // const data = donne;
      const data: Observable<Object> = this.us.getAllusers();
      data.pipe(toArray()).subscribe((dataArray: any[]) => {
        this.source.load(dataArray[0]);
      });
      // this.source.load(data);
    }

    onDeleteConfirm(event): void {
      if (window.confirm('Are you sure you want to delete?')) {
        this.us.deleteuser(event.data.id).subscribe(() => {
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
      const updatedCourse = {
        name: event.newData.name,
        username: event.newData.username,
        email: event.newData.email,
      };

      this.us.updateuser(event.data.id, updatedCourse).subscribe(() => {

        event.confirm.resolve(updatedCourse);
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
