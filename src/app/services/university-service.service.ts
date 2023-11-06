import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from '../model/University';

@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {

  private baseUrl = 'http://localhost:8080/api/universities';

  constructor(private http: HttpClient) { }

  getAllUniversities(): Observable<University[]> {
    return this.http.get<University[]>(this.baseUrl);
  }

  getUniversityById(id: number): Observable<University> {
    return this.http.get<University>(`${this.baseUrl}/${id}`);
  }

  createUniversity(university: University): Observable<University> {
    return this.http.post<University>(this.baseUrl, university);
  }

  deleteUniversity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
