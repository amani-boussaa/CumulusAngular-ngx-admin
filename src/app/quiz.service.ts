import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { quiz } from './quiz';
import {answer} from './answer';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'http://localhost:8081/CUMULUS/quiz';

  constructor(private http: HttpClient) { }


  getAllQuizs(): Observable<quiz[]> {
    return this.http.get<quiz[]>(`${this.baseUrl}/getAllQuizs`);
  }
  getQuizById(id: number): Observable<quiz> {
    console.log('getQuizById called with id:', id);
    return this.http.get<quiz>(`${this.baseUrl}/quiz/${id}`).pipe(
      tap(response => console.log('getQuizById response:', response))
    );
  }
  checkAnswers(quizId: number, selectedAnswerIds: number[]): Observable<answer[]> {
    return this.http.post<answer[]>(`${this.baseUrl}/${quizId}/answers`, { selectedAnswerIds });

  }
}
