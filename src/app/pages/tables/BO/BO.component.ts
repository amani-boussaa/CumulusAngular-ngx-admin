import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { BlogService } from '../../Nadia/service/blog.service';
import { Blog } from '../../Nadia/model/blog';
import { NbToastrService } from '@nebular/theme';
import { User } from '../../../Entity/User';


@Component({
  selector: 'ngx-bo',
  templateUrl: './BO.component.html',
  styleUrls: ['./BO.component.scss'],
})
export class BOComponent {
  createBlog:Blog = new Blog();
  listblog:any;
  
  createTags:string = "";
  data: any[];
  settings = {
    actions: {
      add: true,
      edit: true,
      delete: true,
    
    },
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
      blog_id: {
        title: 'ID',
        type: 'number',
      },
      title: {
        title: 'Title',
        type: 'string',
      },
      author: {
        title: 'Author',
        type: 'string',
      },
      date_created: {
        title: 'Date Created',
        type: 'Date',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      keywords: {
        title: 'Keywords',
        type: 'string',
      },
      content: {
        title: 'Content',
        type: 'string',
      },
      imagePath: {
        title: 'Image',
        type: 'any',  
      },bloguser: {
        title: 'bloguser',
        type: 'html',
        valuePrepareFunction: (cell: any) => ` ${cell.id} | id : ${cell.nom} `,
        
        
      }
      
    },
  };

  source: LocalDataSource = new LocalDataSource();
  public Blogs : any[] = []; 

  constructor(private service: SmartTableData,private blogservice: BlogService,private toastrService: NbToastrService ) {
this.blogservice.getBlogList().subscribe((data)=>{
  this.source.load(data)
});
  }

  // onDeleteConfirm(event): void {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }

  onCreate(event): void {
    //this.createBlog.setid(null)
    this.createBlog.settitle(event.newData.title)
    this.createBlog.setcontent(event.newData.content)
   this.createBlog.setauthor(event.newData.author)
   this.createBlog.setdescription(event.newData.description)
   this.createBlog.setdate_created(event.newData.date_created)
   this.createBlog.setimagepath(event.newData.imagePath)
   //this.createBlog.setkeywords(event.newData.keywords)
   this.createBlog.setbloguser( new User(event.newData.bloguser));
console.log(this.createBlog);
  
//   if (!this.createBlog.gettitle()|| !this.createBlog.getcontent() || !this.createBlog.getauthor()) {
//     this.toastrService.danger('Verify Fields ' ,"Empty", { icon: 'alert-triangle-outline', preventDuplicates: true, limit: 3 });
    
//   }else if (isNaN(Number( this.createBlog.getbloguser().id))) {
//     this.toastrService.danger('Id creator must be a number ' ,"ID", { icon: 'alert-triangle-outline', preventDuplicates: true, limit: 3 });
  
// }else{
this.blogservice.createBlog(this.createBlog).subscribe((data) => {
     
  console.log(data); 
  
  
}
);;

console.log("sendUpdate");
//}
 }


 onUpdateConfirm(event): void {
  this.createBlog.settitle(event.newData.title)
  this.createBlog.setcontent(event.newData.content)
 this.createBlog.setauthor(event.newData.author)
 this.createBlog.setdescription(event.newData.description)
 this.createBlog.setdate_created(event.newData.date_created)
 this.createBlog.setimagepath(event.newData.imagePath)
 this.createBlog.setbloguser( new User(event.newData.bloguser));
console.log(this.createBlog);

this.blogservice.createBlog(this.createBlog).subscribe((data) => {
   
console.log(data); 

}
);;

console.log("sendUpdate");
}

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.blogservice.deleteBlog(event.data.blog_id).subscribe(() => {
        event.confirm.resolve();
      }, () => {
        event.confirm.reject();
      });
    } else {
      event.confirm.reject();
    }
  }
  // onDeleteConfirm(blogid:number):void{
  //   this.blogservice.deleteBlog(blogid).subscribe({next:()=>this.ngOnInit()});
  // }


  ngOnInit() {
   
    this.getBlogs();
    console.log(this.Blogs);
   
 
  }

  getBlogs() {
    this.blogservice.getBlogList()
      .subscribe(
        (response) => {
         
         this.Blogs = response;
         this.source.load(this.Blogs);
         console.log(this.Blogs);
        },
        (error) => {
          console.log(error);
        }
      );
  } 
  removeLastSpaces(input: string): string {
    const lastCommaIndex = input.lastIndexOf(',');
    if (lastCommaIndex === input.length - 1) {
      input = input.slice(0, lastCommaIndex);
    }
  
   
    return input.trimEnd();
  }
  
  
}
