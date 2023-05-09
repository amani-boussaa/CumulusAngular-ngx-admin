import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { Blog } from '../model/blog';

@Component({
  selector: 'ngx-the-blog',
  templateUrl: './the-blog.component.html',
  styleUrls: ['./the-blog.component.scss']
})
export class TheBlogComponent implements OnInit {

  blog_id: any;
  blog: any =[]

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.blog_id = this.route.snapshot.queryParamMap.get('data');
    this.blogService.getBlog(this.blog_id).subscribe(blog => {
      this.blog = blog;
      console.log(this.blog);
    });
  }

}
