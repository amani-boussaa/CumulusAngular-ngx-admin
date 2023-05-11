import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  private baseUrl = 'http://localhost:8080/CUMULUS/blog/';

  constructor(private http:HttpClient) { }

  getBlogList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'ReadBlog');
  }

  createBlog(blog: object): Observable<object> {
    const httpOptions = {
       headers: new HttpHeaders({
           'Content-Type': 'multipart/form-data'
       })
    };
    return this.http.post(`${this.baseUrl}`+'CreateBlog', blog, httpOptions);
}


  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete-blog/${id}`, { responseType: 'text' });
  }

  getBlog(id: number) {
    return this.http.get(`http://localhost:8080/CUMULUS/blog/RetrieveBlog/${id}`);
  }

  updateBlog(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}update-blog/${id}`, value);
  }

}
