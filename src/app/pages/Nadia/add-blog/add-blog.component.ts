import { Component, OnInit } from '@angular/core';
import  {BlogService} from '../service/blog.service';
import {Blog} from  '../model/blog';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'ngx-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  constructor(private blogService : BlogService ) {}
  public blog : any= [] ;
  ngOnInit(): void {
  }

 onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.blog.imagePath = file;
    }
  }
  
 addBlog() {
  
  const formData = new FormData();
//  const imageFile = this.blog.imagePath;
  //const imageName = Date.now() + '_' + imageFile.name;
 // formData.append('image', this.blog.imagePath);
  formData.append('title', this.blog.title);
  formData.append('author', this.blog.author);
  formData.append('description', this.blog.description);
  formData.append('keywords', this.blog.keywords);
  formData.append('content', this.blog.content);

  this.blogService.createBlog(formData).subscribe(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
  
}

}
