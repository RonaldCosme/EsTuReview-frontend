import { Component, OnInit, ViewChild } from '@angular/core';
import { University } from 'src/app/model/University';
import { UniversityServiceService } from 'src/app/services/university-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDeleteUniversityComponent } from './confirm-delete-university/confirm-delete-university.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  dataSource = new MatTableDataSource<University>; 
  displayedColumns: string[] = ['universityId', 'name', 'campus', 'location', 'description', 'actions' ];

  @ViewChild('paginator')
   paginator!: MatPaginator;

  constructor(private universityService: UniversityServiceService , public dialog:MatDialog, private userService: UserService) {}


  logout() {
    this.userService.logout();    
  }

  userLogged() {
    return this.userService.getCurrentUserId()==null?false:true;
  }

  ngOnInit() {
    this.getUniversities();
  }

  getUniversities(): void {
    this.universityService.getAllUniversities().subscribe(
      (data: University[]) => {
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

  deleteUniversity(universityId: number) {
    let dialogRef = this.dialog.open(ConfirmDeleteUniversityComponent);

    dialogRef.afterClosed().subscribe(
      selectedOption => {
        if(selectedOption==true){
          this.universityService.deleteUniversity(universityId).subscribe({
            next:(data)=>{
              this.getUniversities();
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
