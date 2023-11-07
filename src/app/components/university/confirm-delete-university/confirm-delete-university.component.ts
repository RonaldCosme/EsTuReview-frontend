import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-delete-university',
  templateUrl: './confirm-delete-university.component.html',
  styleUrls: ['./confirm-delete-university.component.css']
})
export class ConfirmDeleteUniversityComponent {

  constructor (private dialogRef: MatDialogRef<ConfirmDeleteUniversityComponent>) {}

  cancel(){
    this.dialogRef.close(false);
  }

  confirm(){
    this.dialogRef.close(true);
  }


}
