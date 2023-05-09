import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { BlogService } from '../../Nadia/service/blog.service';
import { Blog } from '../../Nadia/model/blog';


@Component({
  selector: 'ngx-bo',
  templateUrl: './BO.component.html',
  styleUrls: ['./BO.component.scss'],
})
export class BOComponent {
  createBlog:Blog = new Blog();
  
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
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
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
        type: 'File',  //image amani
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  public Blogs : any[] = []; 

  constructor(private service: SmartTableData,private blogservice: BlogService, ) {

  }

  // onDeleteConfirm(event): void {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }


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


  ngOnInit() {
   
    this.getBlogs();
    console.log(   this.Blogs);
   
 
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
  
  
  
}
