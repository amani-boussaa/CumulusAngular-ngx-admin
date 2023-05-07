import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class BlogService {  
  
  private baseUrl = 'http://localhost:8081/CUMULUS/blog/';  
  
  constructor(private http:HttpClient) { }  
  
  getBlogList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'ReadBlog');  
  }  
  
   createBlog(blog: object): Observable<object> {  
     return this.http.post(`${this.baseUrl}`+'CreateBlog', blog);  
   }  

  
  
  deleteBlog(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}delete-blog/${id}`, { responseType: 'text' });  
  }  
  
  getBlog(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}blog/${id}`);  
  } 

  updateBlog(id: number, value: any): Observable<Object> {  

    return this.http.post(`${this.baseUrl}update-blog/${id}`, value);  
  }  
    
} 