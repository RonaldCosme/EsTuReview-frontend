import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/Course'; 

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private baseUrl = 'http://localhost:8080/api/courses';  

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }

  createCourse(courseDTO: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, courseDTO);
  }

  updateCourse(id: number, courseDTO: Course): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/${id}`, courseDTO);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
