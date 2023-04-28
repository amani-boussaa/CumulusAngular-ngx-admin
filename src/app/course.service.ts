import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:8081/CUMULUS/courses';
  private courseService: CourseService;
  pdfUrl: string;

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/getAllCourses`);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`);
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/create`, course);
  }

  updateCourse(id: number, course: any) {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
  // uploadFile(file: File): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('file', file);
  
  //   return this.http.post<any>(`${this.baseUrl}/uploadFile`, formData);
  // }


   uploadFile(id: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/${id}/file`, formData);
  }



  getFile(id: number): Observable<Blob> {
    const url = `${this.baseUrl}/getblobfile/${id}`;
    // console.log(url)
    // return this.http.get<Blob>(url, { responseType: 'blob' });
    return this.http.get(url, { responseType: 'blob' });

  }
  getPdf(id: number): void {
    this.courseService.getFile(id).subscribe(blob => {
      this.pdfUrl = URL.createObjectURL(blob);
    });
  }
}
