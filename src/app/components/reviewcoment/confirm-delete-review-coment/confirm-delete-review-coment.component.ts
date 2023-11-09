import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-review-coment',
  templateUrl: './confirm-delete-review-coment.component.html',
  styleUrls: ['./confirm-delete-review-coment.component.css']
})
export class ConfirmDeleteReviewComentComponent {

  constructor (private dialogRef: MatDialogRef<ConfirmDeleteReviewComentComponent>) {}

  cancel(){
    this.dialogRef.close(false);
  }

  confirm(){
    this.dialogRef.close(true);
  }

}
