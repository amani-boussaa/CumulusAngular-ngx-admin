import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thread } from '../Entity/Thread';
import { Comment } from '../Entity/Comment';
import { SlideOutComponent } from '../pages/e-commerce/slide-out/slide-out.component';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  private baseUrl = '/api/thread';

  constructor(private http: HttpClient) { }

  createThread(thread: any){
    console.log("CREATE THREAD METHODE");
    console.log(thread);
    let id = sessionStorage.getItem('id')
    return this.http.post<Thread>(`${environment.urlBackend}api/thread/createThread/`+id, thread);
  }
  createThreadWithTags(thread: any,tags:string){
    console.log(thread);
    return this.http.post<Thread>(`${environment.urlBackend}api/thread/createThreadWithTags?tags=${tags}`, thread);
  }

  getStats(){
    let id = sessionStorage.getItem('id')
    return this.http.get(`${environment.urlBackend}api/thread/getThreadStats/`+id);
  }

  updateThread(id: number, thread: any) {
    return this.http.put(`${this.baseUrl}/${id}`, thread);
  }

  getThreadById(threadid: number) {
    let userid = sessionStorage.getItem('id')
    this.http.get(`${environment.urlBackend}api/thread/viewThread/${threadid}/${userid}`).subscribe()

    return this.http.get<Thread>(`${environment.urlBackend}api/thread/getThreadById/${threadid}`);



  }

  getAllthreads(){


    return this.http.get<Thread[]>(`${environment.urlBackend}api/thread/getAllThreads`);

    // axios.get('http://localhost:8081/CUMULUS/api/thread/getAllThreads')
    // .then(response => {
     
    //   console.log(response.data);
    //   return response.data;
    // })
    // .catch(error => {
    //   console.error(error);
    // });

    // return {};
   
  }
  
  getThreadByName(name: string){
    return this.http.get<Thread[]>(`${environment.urlBackend}api/threadtag/getThreadByName/${name}`);
  }
  getThreadByUser(userId: any){
    return this.http.get(`${environment.urlBackend}api/thread/getThreadByUser/${userId}`);
  }
  postComment(threadid: number,comment:Comment,userid:number){
    console.log("postclicked Service");
    console.log(comment);
    
    return this.http.post(`${environment.urlBackend}api/thread/addComment/${threadid}/${userid}`,comment)  .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
  deleteThread(id: number) {
    return this.http.delete(`${environment.urlBackend}api/thread/delete/${id}`);
  }



}
