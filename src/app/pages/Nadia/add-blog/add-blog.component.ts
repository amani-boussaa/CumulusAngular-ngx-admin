import { Component, OnInit } from '@angular/core';
import  {BlogService} from '../service/blog.service';
import {Blog} from  '../model/blog';
import { HttpHeaders } from '@angular/common/http';
import { data } from 'jquery';
import { User } from '../../../Entity/User';

@Component({
  selector: 'ngx-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  blog = new Blog(null, null, null,null,null,null, new User(parseInt(sessionStorage.getItem('id')))

  );

  constructor(private blogService : BlogService) {
    
    //this.blog = new Blog();
  }

  //public blog : Blog;

  ngOnInit(): void {
  }

  // onFileSelect(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.blog.imagePath = file;
  //   }
  // }
  
  OnClick() {
    // const formData = new FormData();
    // const imageFile = this.blog.imagePath;
    // const imageName = Date.now() + '_' + imageFile.name;
    // formData.append('image', imageFile, imageName);
    // formData.append('imagePath', `../../../../assets/images/${imageName}`);  
    // formData.append('title', this.blog.title);
    // formData.append('author', this.blog.author);
    // formData.append('description', this.blog.description);
    // formData.append('keywords', this.blog.keywords);
    // formData.append('content', this.blog.content);
    // console.log(this.blog);

    // this.blogService.createBlog(this.blog).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
let userID = sessionStorage.getItem('id')
      let user:User = new User(parseInt(userID)); //userID
      this.blog.setbloguser(user)
      console.log(user);
    this.blogService.createBlog(this.blog).subscribe(res=> {console.log(res)
      alert ('blog added')
    this.blog = new Blog()
  },err=> {
    console.log(err)
    alert('error server')
  }
    )

  }
}
