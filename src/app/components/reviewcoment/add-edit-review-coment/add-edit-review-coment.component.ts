import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewComment } from 'src/app/model/ReviewComment';
import { ReviewCommentServiceService } from 'src/app/services/review-comment-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-add-edit-review-coment',
  templateUrl: './add-edit-review-coment.component.html',
  styleUrls: ['./add-edit-review-coment.component.css']
})
export class AddEditReviewComentComponent {

  addEditForm!: FormGroup;
  id!: number;
  moodInsert: boolean = true;

  constructor (private formBuilder: FormBuilder, private ReviewCommentServiceService: ReviewCommentServiceService, private router: Router, 
    private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {

    this.addEditForm = this.formBuilder.group(
      {
      commentId: [""],
      text: [""],
      tag: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      commentDate: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      reviewId: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      userappId: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      }
      
    );

    this.id = this.activatedRoute.snapshot.params['commentId'];
    if(this.id!=0 && this.id!=undefined) {
      this.moodInsert = false;
      this.ReviewCommentServiceService.getReviewCommentById(this.id).subscribe( {
        next: (data: ReviewComment) => {
          this.addEditForm.get('commentId')?.setValue(data.commentId);
          this.addEditForm.get('text')?.setValue(data.text);
          this.addEditForm.get('tag')?.setValue(data.tag);
          this.addEditForm.get('commentDate')?.setValue(data.commentDate);
          this.addEditForm.get('reviewId')?.setValue(data.reviewId);
          this.addEditForm.get('userappId')?.setValue(data.userappId);
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        }
      })
    } else {
      this.id = 0;
      this.moodInsert = true;
    }
  }

  saveReviewComent() {
    
   const reviewComent: ReviewComment = {
      commentId: this.addEditForm.get('commentId')?.value,
      text: this.addEditForm.get('text')?.value,
      tag: this.addEditForm.get('tag')?.value,
      commentDate: this.addEditForm.get('commentDate')?.value,
      reviewId: this.addEditForm.get('reviewId')?.value,
      userappId: this.addEditForm.get('userappId')?.value,
    }

    if(this.moodInsert) {
      this.ReviewCommentServiceService.createReviewComment(reviewComent).subscribe( {
        next: (data: ReviewComment) => {
          this.snackBar.open('ReviewComment created successfully!','',{
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
          this.router.navigate(['review-coment']);
        },
        error: (err) => {
          console.log(err);
          this.snackBar.open('Error creating ReviewComment!','',{
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        }
      })
    } else {
      this.ReviewCommentServiceService.updateReviewComment(this.id ,reviewComent).subscribe( {
        next: (data: ReviewComment) => {
          this.router.navigate(['review-coment']);
          this.snackBar.open('ReviewComment updated successfully!','',{
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
          this.router.navigate(['review-coment']);
        },
        error: (err) => {
          console.log(err);
          this.snackBar.open('Error updating ReviewComment!','',{
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        }
      });
    }

  }

  cancel() {
    this.router.navigate(['review-coment']);
  }


}
