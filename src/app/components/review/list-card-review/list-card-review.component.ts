import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { ProfessorServiceService } from 'src/app/services/professor-service.service';
import { ReviewServiceService } from 'src/app/services/review-service.service';
import { ReviewCommentServiceService } from 'src/app/services/review-comment-service.service';

import { Professor } from 'src/app/model/Professor';
import { Review } from 'src/app/model/Review';
import { ReviewComment } from 'src/app/model/ReviewComment';
import { AddEditReviewComentComponent } from '../../reviewcoment/add-edit-review-coment/add-edit-review-coment.component';

@Component({
  selector: 'app-list-card-review',
  templateUrl: './list-card-review.component.html',
  styleUrls: ['./list-card-review.component.css']
})
export class ListCardReviewComponent implements OnInit { 
  id!: number;
  professorReview!: Professor;
  filteredReviewProfessor: Review[] = [];
  filteredReviewCommentProfessor: ReviewComment[] = [];

  isLiked = false;

  constructor(
    public dialog: MatDialog,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private professorService: ProfessorServiceService,
    private reviewService: ReviewServiceService,    
    private reviewCommentService: ReviewCommentServiceService,  
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadInitialData();
  }

  toggleLike(): void {
    this.isLiked = !this.isLiked;
  }

  shareOnSocialMedia(platform: string): void {
    let url = '';
    const shareUrl = encodeURIComponent('tuURLCompartida'); // Reemplaza con tu URL

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${shareUrl}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
        break;
      // Agrega más casos para otras redes sociales si es necesario
    }

    if (url) {
      window.open(url, '_blank');
    }
  }

  private loadInitialData(): void {
    this.id = this.activatedRoute.snapshot.params['professorId']; 
    if (this.id) {
      this.professorService.getProfessorById(this.id).subscribe(
        result => this.professorReview = result,
        error => console.error('Error loading professor:', error)
      );

      this.reviewService.getAllReviews().subscribe(
        reviews => this.filteredReviewProfessor = reviews,
        error => console.error('Error loading reviews:', error)
      );

      this.reviewCommentService.getAllReviewComments().subscribe(
        comments => this.filteredReviewCommentProfessor = comments,
        error => console.error('Error loading review comments:', error)
      );
    }
  }

  navigateReviewProfessor(offset: number): void {
    const newId = this.id + offset;
    this.professorService.getProfessorById(newId).subscribe(
      result => {
        this.professorReview = result;
        this.id = newId;
        this.loadInitialData();
      },
      error => {
        console.error('Error navigating reviews:', error);
        this.snackBar.open('No more reviews available', 'Close', { duration: 3000 });
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditReviewComentComponent, {
      data: { professorId: this.id },
      height: '660px',
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle the result if necessary
    });
  }
}
