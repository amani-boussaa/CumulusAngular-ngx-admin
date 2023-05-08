import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationModel } from '../entity/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private readonly baseUrl = "http://localhost:8081/CUMULUS"

  constructor(private http:HttpClient) { }

  public getRegistrations():Observable<RegistrationModel[]>{
    return this.http.get<RegistrationModel[]>(`${this.baseUrl}/retrieveRegistration`);
  }

  public deleteRegistration(idRegistration:number):Observable<RegistrationModel>{
    return this.http.delete<RegistrationModel>(`${this.baseUrl}/deleteRegistration/${idRegistration}`);
  }

  public addRegistration( registration:RegistrationModel):Observable<RegistrationModel>{
    return this.http.post<RegistrationModel>(`${this.baseUrl}`, registration);
  }

  public updateRegistration(idRegistration:number, registration:RegistrationModel):Observable<RegistrationModel>{
    return this.http.put<RegistrationModel>(`${this.baseUrl}/${idRegistration}`,registration);
  }
}
