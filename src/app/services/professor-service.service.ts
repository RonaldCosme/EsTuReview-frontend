import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../model/Professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorServiceService {

  private baseUrl = 'http://localhost:8080/api/professors'; 

  constructor(private http: HttpClient) { }

  getAllProfessors(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.baseUrl);
  }

  getProfessorById(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.baseUrl}/${id}`);
  }

  createProfessor(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.baseUrl, professor);
  }

  deleteProfessor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
