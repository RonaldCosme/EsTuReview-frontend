import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewComment } from '../model/ReviewComment';

@Injectable({
  providedIn: 'root'
})
export class ReviewCommentServiceService {

  private baseUrl = 'http://localhost:8080/api/reviewComments'; 

  constructor(private http: HttpClient) { }

  getAllReviewComments(): Observable<ReviewComment[]> {
    return this.http.get<ReviewComment[]>(this.baseUrl);
  }

  getReviewCommentById(id: number): Observable<ReviewComment> {
    return this.http.get<ReviewComment>(`${this.baseUrl}/${id}`);
  }

  createReviewComment(reviewComment: ReviewComment): Observable<ReviewComment> {
    return this.http.post<ReviewComment>(this.baseUrl, reviewComment);
  }

  deleteReviewComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
