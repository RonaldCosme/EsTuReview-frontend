import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserApp } from '../model/UserApp';

@Injectable({
  providedIn: 'root'
})
export class UserAppServiceService {

  private baseUrl = 'http://localhost:8080/api/userApps';

  constructor(private http: HttpClient) { }

  getAllUserApps(): Observable<UserApp[]> {
    return this.http.get<UserApp[]>(this.baseUrl);
  }

  getUserAppById(id: number): Observable<UserApp> {
    return this.http.get<UserApp>(`${this.baseUrl}/${id}`);
  }

  createUserApp(userApp: UserApp): Observable<UserApp> {
    return this.http.post<UserApp>(this.baseUrl, userApp);
  }

  deleteUserApp(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
