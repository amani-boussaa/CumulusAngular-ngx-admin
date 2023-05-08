import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { get } from 'http';
import { Blog } from '../model/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {


  public Blogs : any[] = [];
  

  constructor(private blogservice: BlogService, private router : Router) {}

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogservice.getBlogList()
      .subscribe(
        (response) => {
          this.Blogs = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  blogclicked(blog:Blog){
    this.router.navigate(['/pages/theblog'])
  }

}

