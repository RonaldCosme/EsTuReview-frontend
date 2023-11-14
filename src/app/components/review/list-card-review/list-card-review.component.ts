import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfessorServiceService } from 'src/app/services/professor-service.service';
import { ReviewServiceService } from 'src/app/services/review-service.service';
import { ReviewCommentServiceService } from 'src/app/services/review-comment-service.service';
import { Review } from 'src/app/model/Review';
import { ReviewComment } from 'src/app/model/ReviewComment';
import { Professor } from 'src/app/model/Professor';



@Component({
  selector: 'app-list-card-review',
  templateUrl: './list-card-review.component.html',
  styleUrls: ['./list-card-review.component.css']
})
export class ListCardReviewComponent implements OnInit{ 
 
  //professorReviewForm!: FormGroup;
  id!: number;
  idReview!: number;
  professorreview!:any;
  //filteredReviewProfessor!:any;
  filteredReviewProfessor: Review[] = [];
  reviewsCardProfessors: Review[] = [];

  filteredReviewCommentProfessor: ReviewComment[] = [];
  reviewsCardCommentProfessors: ReviewComment[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private professorServiceService: ProfessorServiceService,
    private reviewServiceService: ReviewServiceService,    
    private reviewCommentServiceService: ReviewCommentServiceService,  
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales si es necesario
    this.loadForm2();
  }


  loadForm2() { 

    this.id = this.activatedRoute.snapshot.params['professorId']; 
console.log("professorId -> "+this.id);
    if(this.id!=0 && this.id!=undefined) {
       this.professorServiceService.getProfessorById(this.id).subscribe( 
        result =>  {this.professorreview = result}       
      );

   /*   this.reviewServiceService.getReviewByIdProfessor(this.id).subscribe( 
        result =>  {this.filteredReviewProfessor = result}  
        ) */
      
        this.reviewServiceService.getReviewByIdProfessor(this.id).subscribe( 
          (reviewss) => {
            this.reviewsCardProfessors = reviewss;
            this.idReview = reviewss[0].reviewId;
            this.filteredReviewProfessor = [...reviewss];
          },
          (error) => {
            console.error('Error loading reviews:', error);
          }
        );
 
//        this.reviewCommentServiceService.getReviewCommentsByReviewId(this.idReview).subscribe( 
  this.reviewCommentServiceService.getAllReviewComments().subscribe(
          (reviewcommentss) => {
            this.reviewsCardCommentProfessors = reviewcommentss;
            this.filteredReviewCommentProfessor = [...reviewcommentss];
          },
          (error) => {
            console.error('Error loading reviewcomments:', error);
          }
        );

    } /*else {
      this.id = 0; 
    };*/
  }

  
  backReviewProfessor(profeId: any): void { 

     this.id = profeId-1; 
     this.professorServiceService.getProfessorById(this.id).subscribe( 
      result =>  {this.professorreview = result}
     );

     this.reviewServiceService.getReviewByIdProfessor(this.id).subscribe( 
      (reviewss) => {
        this.reviewsCardProfessors = reviewss;        
        this.idReview = reviewss[0].reviewId;
        this.filteredReviewProfessor = [...reviewss];
      },
      (error) => {
        console.error('Error loading reviews:', error);
      }
    );

  //  this.reviewCommentServiceService.getReviewCommentsByReviewId(this.idReview).subscribe( 
    this.reviewCommentServiceService.getAllReviewComments().subscribe(
      (reviewcommentss) => {
        this.reviewsCardCommentProfessors = reviewcommentss;
        this.filteredReviewCommentProfessor = [...reviewcommentss];
      },
      (error) => {
        console.error('Error loading reviewcomments:', error);
      }
    );
  }

  forwardReviewProfessor(profeId: any): void { 

    this.id = profeId+1; 
    this.professorServiceService.getProfessorById(this.id).subscribe( 
     result =>  {this.professorreview = result}
    );
    this.reviewServiceService.getReviewByIdProfessor(this.id).subscribe( 
      (reviewss) => {
        this.reviewsCardProfessors = reviewss;
        this.idReview = reviewss[0].reviewId;
        this.filteredReviewProfessor = [...reviewss];
      },
      (error) => {
        console.error('Error loading reviews:', error);
      }
    );
  //  this.reviewCommentServiceService.getReviewCommentsByReviewId(this.idReview).subscribe( 
    this.reviewCommentServiceService.getAllReviewComments().subscribe(
      (reviewcommentss) => {
        this.reviewsCardCommentProfessors = reviewcommentss;
        this.filteredReviewCommentProfessor = [...reviewcommentss];
      },
      (error) => {
        console.error('Error loading reviewcomments:', error);
      }
    );
 }

}
