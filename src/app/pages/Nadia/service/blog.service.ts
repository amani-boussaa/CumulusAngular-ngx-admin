import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Blog } from '../model/blog';
import { environment } from '../../../../environments/environment';
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class BlogService {  
  
  private baseUrl = 'http://localhost:8081/CUMULUS/blog/';  
  
  constructor(private http:HttpClient) { }  
  
  getBlogList(): Observable<any> {  
    return this.http.get(`${environment.urlBackend}api/blog/ReadBlog`);  
  }  
  
  getblogsbyiduser(iduser:any):Observable<Blog[]>{
    return this.http.get<Blog[]>(`http://localhost:8081/CUMULUS/api/blog/userblog/${iduser}`);
  }
  createBlog(blog: object): Observable<object> {  
   
    return this.http.post(`${environment.urlBackend}api/blog/CreateBlog`, blog);  
}

  
  deleteBlog(id: number){  
    return this.http.delete(`${environment.urlBackend}api/blog/DeleteBlog/${id}`);   
  }  
  
  getBlog(id: number) {  
    return this.http.get(`${environment.urlBackend}api/blog/RetrieveBlog/${id}`);  
  } 

  updateBlog(blog: any){  

    return this.http.post(`${environment.urlBackend}api/blog/UpdateBlog`,blog);  
  }  
    
} 