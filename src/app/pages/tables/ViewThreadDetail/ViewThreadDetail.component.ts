import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadService } from '../../../Service/Thread.Service';
import { ThreadTagEntity } from '../../../Entity/ThreadTag';
import { ThreadEntity } from '../../../Entity/Thread';
import { SharedDataService } from '../../../Service/SharedDataService ';












@Component({
  selector: 'ngx-ViewThreadDetail',
  templateUrl: './ViewThreadDetail.component.html',
  styleUrls: ['./ViewThreadDetail.component.scss'],
})
export class ViewThreadDetailComponent  {
name:any;
data:any;


  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private route: ActivatedRoute,private th:ThreadService,private router:Router,private sharedDataService: SharedDataService) {
    this.data=sharedDataService.getThreadData();

console.log((sharedDataService.getThreadData()));
  }
  ngOnInit(): void {
    
   
  }


 

}
