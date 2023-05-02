import { HttpClient } from '@angular/common/http';
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

  getAll() {
    //console.log('itsme')
    return this.httpClient.get<User[]>(this.baseUrl + "user/retrieveAllUsers")
  }

  adduser(user: User): Observable<Object> {
    return this.httpClient.post(this.baseUrl + "user/add", user);
  }

  getUserByUsername(username: any) {
    return this.httpClient.get<User>(this.baseUrl + "user/getbyusername/" + username)
  }

}
