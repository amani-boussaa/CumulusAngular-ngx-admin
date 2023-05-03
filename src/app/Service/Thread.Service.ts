import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thread } from '../Entity/Thread';
import { Comment } from '../Entity/Comment';
import { SlideOutComponent } from '../pages/e-commerce/slide-out/slide-out.component';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  private baseUrl = '/api/thread';

  constructor(private http: HttpClient) { }

  createThread(thread: any){
    return this.http.post(`${this.baseUrl}`, thread);
  }

  updateThread(id: number, thread: any) {
    return this.http.put(`${this.baseUrl}/${id}`, thread);
  }

  getThreadById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllthreads(){


    return this.http.get<Thread[]>(`http://localhost:8081/CUMULUS/api/thread/getAllThreads`);

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
    return this.http.get<Thread[]>(`http://localhost:8081/CUMULUS/api/threadtag/getThreadByName/${name}`);
  }
  getThreadByUser(userId: number){
    return this.http.get(`${this.baseUrl}/user/${userId}`);
  }
  postComment(threadid: number,comment:Comment){
    console.log("postclicked Service");
    console.log(comment);
    
    return this.http.post(`http://localhost:8081/CUMULUS/api/thread/addComment/${threadid}`,comment)  .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}
