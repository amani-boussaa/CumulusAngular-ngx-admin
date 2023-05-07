import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  {BlogService} from '../service/blog.service';
import { Blog } from '../model/blog';
import { data } from 'jquery';


@Component({
  selector: 'ngx-the-blog',
  templateUrl: './the-blog.component.html',
  styleUrls: ['./the-blog.component.scss']
})
export class TheBlogComponent implements OnInit {

  blog_id : any;
  blog : Blog;
  data : any;

  constructor(private route : ActivatedRoute, private blogService : BlogService) {
    this.blog_id= JSON.parse(this.route.snapshot.queryParamMap.get('data'))
    this.blogService.getBlog(this.blog_id).subscribe(data=>{this.data=data})
    console.log(this.blog);
   }

  ngOnInit(): void {
  }

}


