import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../model/blog';
import { id } from '@swimlane/ngx-charts';

@Component({
  selector: 'ngx-updateblog',
  templateUrl: './updateblog.component.html',
  styleUrls: ['./updateblog.component.scss']
})
export class UpdateblogComponent implements OnInit {

  idBlog: any;
  constructor(private blogService : BlogService, private route: ActivatedRoute) {
    this.idBlog = this.route.snapshot.params['id']
    console.log('id',this.idBlog)

   }

  //  blog=new Blog()
  //  obj:any=[]
  //  selectedBlog: Blog;
  //  blogs: Blog[];

  ngOnInit(): void {
    //this.getBlogs(id);
  }

//   getBlogs(id:any): void {
//     this.blogService.getBlog(id).subscribe(blogs =>this.blog);
//   }

//   onSelect(blog: Blog): void {
//     this.selectedBlog = blog;
//   }

// updateblog():void{
//   this.blogService.updateBlog(this.selectedBlog)
//       .subscribe(updatedBlog => {
//         console.log('Blog updated successfully:', updatedBlog);
//         this.getBlogs(id);
//       });
//   }
}
