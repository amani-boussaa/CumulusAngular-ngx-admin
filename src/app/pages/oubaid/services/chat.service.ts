import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Chat } from '../models/chat';
import { Message } from '../models/message';
import { Badword } from '../models/badword';
import { environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = environment.urlBackend ;


  constructor(private httpClient: HttpClient) { }

  getChatById(chatId: any) {
   // if (!chatId) {
   //   chatId = 1;
   // }
    console.log(chatId)
    
    return this.httpClient.get<Chat>(this.baseUrl + "chats/GetChatById/" + chatId)
  }

/*  getChatById(chatId: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetChatById/${chatId}`);
  }*/


  /*updateChat(message: Message, chatId: any): Observable<Object> {
    return this.http.put(this.baseUrl + "/message/" + `${chatId}`, message);
  }*/

  updateChat(message: Message, chatId: any): Observable<Object> {
   // if (!chatId) {
      //chatId = 1;
   // }
    return this.httpClient.put(this.baseUrl + "chats/message/" + `${chatId}`, message);
  }


  /*getChatByFirstUserNameAndSecondUserName(firstUserName: String, secondUserName: String) {
    return this.http.get<Chat>(`${this.baseUrl}/getChatByFirstUserNameAndSecondUserName?firstUserName=${firstUserName}&secondUserName=${secondUserName}`);

  }*/
  getChatByFirstUserNameAndSecondUserName(firstUserName: String, secondUserName: String) {
   // if (!firstUserName) {
    //  firstUserName = 'alicesmith';
   // }
   // if (!secondUserName) {
   //   secondUserName = 'bobjohnson';
   // }
    
    return this.httpClient.get<Chat>(`${this.baseUrl}chats/getChatByFirstUserNameAndSecondUserName?firstUserName=${firstUserName}&secondUserName=${secondUserName}`)
  }

  /*getChatByFirstUserNameOrSecondUserName(userName: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetChatByFirstUserNameOrSecondUserName/${userName}`);
  }*/

  getChatByFirstUserNameOrSecondUserName(userName: any) {
  //  if (!userName) {
   //   userName = 'alicesmith';
   // }
    return this.httpClient.get(`${this.baseUrl}chats/GetChatByFirstUserNameOrSecondUserName/${userName}`);
  }

 /* createChatRoom(chat: Chat): Observable<any> {
    return this.http.post(`${this.baseUrl}`, chat);
  }*/

  createChatRoom(chat: Chat): Observable<Object> {
    return this.httpClient.post(this.baseUrl + "chats/addChat", chat);
  }


/*  updateChat(message: Message, chatId: any): Observable<Object> {
    const id = 1; // static id
    return this.httpClient.put(this.baseUrl + "/message/" + `${id}`, message);
  }*/


  getBadWords(): Observable<Badword[]> {
    return this.httpClient.get<Badword[]>(this.baseUrl + 'chats/GetAllBadWords');
  }

  checkMessage(message: Message): Observable<any> {
    if (!message || !message.message) {
      return throwError('Message is null or empty');
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + 'chats/checkMessage', message);
  }


  
    getAverageMessages(): Observable<Badword[]> {
    return this.httpClient.get<Badword[]>(this.baseUrl + 'chats/average-messages');
  }

  getMostCommonKeywords(): Observable<{ [key: string]: number }> {
    return this.httpClient.get<{ [key: string]: number }>(`${this.baseUrl}chats/keywords`);
  }
  



  
  


}
