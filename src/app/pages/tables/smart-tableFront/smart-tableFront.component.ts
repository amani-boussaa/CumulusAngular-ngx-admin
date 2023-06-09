import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { ThreadService } from '../../../Service/Thread.Service';
import { NbTagComponent } from '@nebular/theme';
import { Thread } from '../../../Entity/Thread';
import { ThreadTagEntity } from '../../../Entity/ThreadTag';
import { NavigationExtras, Router } from '@angular/router';
import { SharedDataService } from '../../../Service/SharedDataService ';


@Component({
  selector: 'ngx-smart-tableFront',
  templateUrl: './smart-tableFront.component.html',
  styleUrls: ['./smart-tableFront.component.scss'],
})
export class SmartTableFrontComponent {
  public tagid:any;
data :any ;
 

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private th:ThreadService ,private router:Router,private sharedDataService: SharedDataService) {

    this.th.getAllthreads().subscribe((data) => { 
      console.log(data);

      this.data = data; 
    
      
    });

 
  }
TagClick(t:ThreadTagEntity){

 

  this.router.navigate(['/pages/viewThreadTag'],{ queryParams: { data: JSON.stringify(t) } });


}
ReadMore(d:Thread){

  this.router.navigate(['/pages/viewThreadDetail'],{ queryParams: { data: JSON.stringify(d.id) }});
}
ViewMyThreads(){
  console.log("dasdas");
  this.router.navigate(['/pages/tables/myThreads'],{ queryParams: { data: JSON.stringify(2) } });
}


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.th.deleteThread(event.data.id).subscribe(() => {
        event.confirm.resolve();
      }, () => {
        event.confirm.reject();
      });
    } else {
      event.confirm.reject();
    }
  }
  CreateThread(){
    this.router.navigate(['/pages/tables/createThread']);
  }

  ViewMyStats(){
    this.router.navigate(['/pages/tables/threadStats'] );
  }
  
}
