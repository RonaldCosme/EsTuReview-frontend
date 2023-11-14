import { Component } from '@angular/core';
import { OnInit,ViewChild } from '@angular/core';
import { ReviewComment } from 'src/app/model/ReviewComment';
import { ReviewCommentServiceService } from 'src/app/services/review-comment-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteReviewComentComponent} from '../reviewcoment/confirm-delete-review-coment/confirm-delete-review-coment.component';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-reviewcoment',
  templateUrl: './reviewcoment.component.html',
  styleUrls: ['./reviewcoment.component.css']
})
export class ReviewComentComponent implements OnInit {

  dataSource = new MatTableDataSource<ReviewComment>;
  displayedColumns: string[] = ['commentId', 'text','tag','commentDate','reviewId', 'userappId' ];
  
    @ViewChild('paginator')
    paginator!: MatPaginator;
  
    constructor(private reviewCommentService: ReviewCommentServiceService, public dialog:MatDialog, private userService: UserService) { }
     

  logout() {
    this.userService.logout();    
  }

  userLogged() {
    return this.userService.getCurrentUserId()==null?false:true;
  }

    ngOnInit() {
      this.getReviewComments();
    }
  
    getReviewComments(): void {
      this.reviewCommentService.getAllReviewComments().subscribe(
        (data: ReviewComment[]) => {
          this.dataSource = new MatTableDataSource(data); // Inicializa la fuente de datos con tus universidades
          this.dataSource.paginator = this.paginator; // Asigna el paginador a la fuente de datos
        },
        (error) => {
          console.error('There was an error!', error);
        }
      );
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
        }
    }
  
    deleteReviewComment(commentId: number) {
      let dialogRef = this.dialog.open(ConfirmDeleteReviewComentComponent);
  
      dialogRef.afterClosed().subscribe(
        selectedOption => {
          if(selectedOption==true){
            this.reviewCommentService.deleteReviewComment(commentId).subscribe({
              next:(data)=>{
                this.getReviewComments();
              },
              error:(error)=>{
                console.error('There was an error!', error);
              }
            });
          }
        }
      );
    }
  }
