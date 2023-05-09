import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

import { environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = environment.urlBackend  ;

  constructor(private httpClient: HttpClient) { }
  token: any = localStorage.getItem('accessToken')
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  };
  getAll() {
    console.log('itsme')
    return this.httpClient.get<User[]>(this.baseUrl + "user/",this.httpOptions)
  }

  adduser(user: User): Observable<Object> {
    return this.httpClient.post(this.baseUrl + "user/add", user);
  }

  getUserByUsername(username: any) {
    return this.httpClient.get<User>(this.baseUrl + "user/getbyusername/" + username,this.httpOptions)
  }

}
