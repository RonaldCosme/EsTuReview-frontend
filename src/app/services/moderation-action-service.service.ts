import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModerationAction } from '../model/ModerationAction';

@Injectable({
  providedIn: 'root'
})
export class ModerationActionServiceService {

  private baseUrl = 'http://www.estureview.online/api/moderationActions';

  constructor(private http: HttpClient) { }

  getAllModerationActions(): Observable<ModerationAction[]> {
    return this.http.get<ModerationAction[]>(this.baseUrl);
  }

  getModerationActionById(id: number): Observable<ModerationAction> {
    return this.http.get<ModerationAction>(`${this.baseUrl}/${id}`);
  }

  createModerationAction(moderationAction: ModerationAction): Observable<ModerationAction> {
    return this.http.post<ModerationAction>(this.baseUrl, moderationAction);
  }

  deleteModerationAction(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
