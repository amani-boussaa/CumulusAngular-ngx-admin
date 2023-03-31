import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl = 'http://localhost:8081/CUMULUS/question';

  constructor(private http: HttpClient) { }


  getAllQuests(): Observable<question[]> {
    return this.http.get<question[]>(`${this.baseUrl}/getAllQuests`);
  }

  getQuestionById(id: number): Observable<question> {
    return this.http.get<question>(`${this.baseUrl}/${id}`);
  }
}
