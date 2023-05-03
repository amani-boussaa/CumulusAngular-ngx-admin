import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadService } from '../../../Service/Thread.Service';
import { ThreadTagEntity } from '../../../Entity/ThreadTag';
import { Thread } from '../../../Entity/Thread';
import { SharedDataService } from '../../../Service/SharedDataService ';

@Component({
  selector: 'ngx-ViewThreadTag',
  templateUrl: './ViewThreadTag.component.html',
  styleUrls: ['./ViewThreadTag.component.scss'],
})
export class ViewThreadTagComponent  {
name:any;
data:any;


  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private route: ActivatedRoute,private th:ThreadService,private router:Router,private sharedDataService: SharedDataService) {

    this.name=JSON.parse(this.route.snapshot.queryParamMap.get('data'))
    this.th.getThreadByName(this.name.name).subscribe((data) => { 
      this.data=data;
      console.log(data);

      
    
      
    });
  }
  ngOnInit(): void {
   
  }


  TagClick(t:ThreadTagEntity){

 

    this.router.navigate(['/pages/viewThreadTag'],{ queryParams: { data: JSON.stringify(t) } });
  
  
  }ReadMore(d:Thread){
    this.sharedDataService.setThreadData(d);
    this.router.navigate(['/pages/viewThreadDetail']);
  
  
  }

}
