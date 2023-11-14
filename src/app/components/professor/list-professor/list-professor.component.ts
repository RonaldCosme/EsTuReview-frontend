import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Professor } from 'src/app/model/Professor';
import { ProfessorServiceService } from 'src/app/services/professor-service.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.css']
})
export class ListProfessorComponent implements OnInit{
  professors: Professor[] = [];
  filteredProfessor: Professor[] = [];
  searchProfessor: string = '';

  constructor(private professorService: ProfessorServiceService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadProfessors(); 
  }

  loadProfessors(): void {
    this.professorService.getAllProfessors().subscribe(
      (professors) => {
        this.professors = professors;
        this.filteredProfessor = [...professors];
      },
      (error) => {
        console.error('Error loading professors:', error);
      }
    );
  }

  deleteProfessor(professorId: number): void {
    if (confirm('Are you sure you want to delete this professor?')) {
      this.professorService.deleteProfessor(professorId).subscribe(
        () => {
          this.professors = this.professors.filter((professor) => professor.professorId !== professorId);
          this.filteredProfessor = this.filteredProfessor.filter((professor) => professor.professorId !== professorId);
          this.snackBar.open('Professor deleted successfully', 'Dismiss', { duration: 3000 });
        },
        (error) => {
          console.error('Error deleting Professor', error);
          this.snackBar.open('Error deleting Professor', 'Dismiss', { duration: 3000 });
        }
      );
    }
  }

  searchProfessorList(): void {
    if (this.searchProfessor) {
      const searchTerm = this.searchProfessor.trim().toLowerCase();
      this.filteredProfessor = this.professors.filter((professor) => {
        return (
          //professor.name.toLowerCase().includes(searchTerm) ||
          //professor.lastname.toLowerCase().includes(searchTerm) ||
          professor.faculty.toLowerCase().includes(searchTerm) ||
          professor.professorId.toString().toLowerCase().includes(searchTerm)
          // Agrega más campos según sea necesario
        );
      });
    } else {
      this.loadProfessors();
    }
  }

  editProfessor(professorId: number, professor: Professor):void{
    this.professorService.updateProfessor(professorId,professor);
  }
}
