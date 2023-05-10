import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { Blog } from '../model/blog';
import { User } from '../../User/model/user';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.scss']
})
export class MyBlogComponent implements OnInit {
listblog: Blog[] = [];
iduser:any;
users: User[] = [];
blog= new Blog()
  constructor(private blogservice: BlogService,private router: Router) { }

  ngOnInit(): void {
  this.GetBlogByuser();
  }
GetBlogByuser(){
  let userID = sessionStorage.getItem('id')
 
  this.blogservice.getblogsbyiduser(parseInt(userID)).subscribe(res=>{
    this.listblog=res;
    console.log(this.listblog);
  });
}
// blogbyuser(userId: number) {
//   this.blogservice.getblogsbyiduser(userId).subscribe(res => {
//   this.listblog = res;
//   });
//   }
deleteblog(blogid:number):void{
  this.blogservice.deleteBlog(blogid).pipe().subscribe({next:()=>this.router.navigate(['/pages/MyBlog/:id'])})
}


updateblog():void{
  this.blogservice.updateBlog(this.blog).subscribe({next:()=>this.router.navigate(['/pages/MyBlog/:id'])})
}
edit(blog:any){
  console.log(blog)
  const url ='updateblog/'+blog.id
  this.router.navigateByUrl(url)
}

}
