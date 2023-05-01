import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Chat } from '../models/chat';
import { Message } from '../models/message';
import { Badword } from '../models/badword';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = 'http://localhost:8081/CUMULUS/chats';

  constructor(private httpClient: HttpClient) { }

  getChatById(chatId: any) {
   // if (!chatId) {
   //   chatId = 1;
   // }
    console.log(chatId)
    
    return this.httpClient.get<Chat>(this.baseUrl + "/GetChatById/" + chatId)
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
    return this.httpClient.put(this.baseUrl + "/message/" + `${chatId}`, message);
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
    
    return this.httpClient.get<Chat>(`${this.baseUrl}/getChatByFirstUserNameAndSecondUserName?firstUserName=${firstUserName}&secondUserName=${secondUserName}`)
  }

  /*getChatByFirstUserNameOrSecondUserName(userName: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetChatByFirstUserNameOrSecondUserName/${userName}`);
  }*/

  getChatByFirstUserNameOrSecondUserName(userName: any) {
  //  if (!userName) {
   //   userName = 'alicesmith';
   // }
    return this.httpClient.get(`${this.baseUrl}/GetChatByFirstUserNameOrSecondUserName/${userName}`);
  }

 /* createChatRoom(chat: Chat): Observable<any> {
    return this.http.post(`${this.baseUrl}`, chat);
  }*/

  createChatRoom(chat: Chat): Observable<Object> {
    return this.httpClient.post(this.baseUrl + "/addChat", chat);
  }


/*  updateChat(message: Message, chatId: any): Observable<Object> {
    const id = 1; // static id
    return this.httpClient.put(this.baseUrl + "/message/" + `${id}`, message);
  }*/


  getBadWords(): Observable<Badword[]> {
    return this.httpClient.get<Badword[]>(this.baseUrl + '/GetAllBadWords');
  }

  checkMessage(message: Message): Observable<any> {
    if (!message || !message.message) {
      return throwError('Message is null or empty');
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + '/checkMessage', message);
  }


  
    getAverageMessages(): Observable<Badword[]> {
    return this.httpClient.get<Badword[]>(this.baseUrl + '/average-messages');
  }

  getMostCommonKeywords(): Observable<{ [key: string]: number }> {
    return this.httpClient.get<{ [key: string]: number }>(`${this.baseUrl}/keywords`);
  }
  



  
  


}
