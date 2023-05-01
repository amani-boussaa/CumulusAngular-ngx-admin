import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-ViewThreadTag',
  templateUrl: './ViewThreadTag.component.html',
  styleUrls: ['./ViewThreadTag.component.scss'],
})
export class ViewThreadTagComponent  {
threadTag:any;


  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private route: ActivatedRoute) {
    const data = this.service.getData();
    this.source.load(data);
  }
  ngOnInit(): void {
 console.log(  this.route.snapshot.state);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
