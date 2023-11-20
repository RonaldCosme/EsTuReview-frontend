import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfessorServiceService } from 'src/app/services/professor-service.service';
import { Professor } from 'src/app/model/Professor';


@Component({
  selector: 'app-insert-professor',
  templateUrl: './insert-professor.component.html',
  styleUrls: ['./insert-professor.component.css']
})
export class InsertProfessorComponent implements OnInit {
  customProfessorForm: FormGroup; 
 
  id!: number;
  moodInsertProfessor: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private professorServiceService: ProfessorServiceService,
    private snackBar: MatSnackBar
  ) {
    this.customProfessorForm = this.formBuilder.group({
      professorId: [''],
     // name: ['', Validators.required],
   //   lastname: ['', Validators.required],
      faculty: ['', Validators.required], 
      userId: ['', Validators.required], 
      joinDate: ['', Validators.required]
    });
  }

  ngOnInit(): void { 
    // Puedes realizar inicializaciones adicionales si es necesario
    this.loadForm();
  }


  loadForm() { 

    this.id = this.activatedRoute.snapshot.params['professorId'];
console.log("professorId-> " + this.id);

    if(this.id!=0 && this.id!=undefined) {
      this.moodInsertProfessor = false;
      this.professorServiceService.getProfessorById(this.id).subscribe( {
        next: (data: Professor) => {
          this.customProfessorForm.get('professorId')?.setValue(data.professorId);
          this.customProfessorForm.get('userId')?.setValue(data.userId);
          this.customProfessorForm.get('faculty')?.setValue(data.faculty);
          this.customProfessorForm.get('joinDate')?.setValue(data.joinDate);
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        }
      })
    } else {
      this.id = 0;
      this.moodInsertProfessor = true;

    };
  }


  addCustomProfessor(): void {
    if (this.customProfessorForm.valid) {
      const newProfessor = this.customProfessorForm.value;

        if(this.moodInsertProfessor){  //INSERTANDO

            this.professorServiceService.createProfessor(newProfessor).subscribe(
              () => {
                console.log('Profesor added successfully');
                this.customProfessorForm.reset();
                this.snackBar.open('Professor added successfully', 'OK', { duration: 2000 });
              },
              (error: any) => {
                console.error('Error adding Profesor', error);
                this.snackBar.open('Error adding Professor', 'Dismiss', { duration: 3000 });
              }
            );

          }else{  //ACTUALIZANDO
            this.professorServiceService.updateProfessor(this.id,newProfessor).subscribe(
              () => {
                console.log('Profesor update successfully');
                this.customProfessorForm.reset();
                this.snackBar.open('Professor update successfully', 'OK', { duration: 2000 });
              },
              (error: any) => {
                console.error('Error update Profesor', error);
                this.snackBar.open('Error update Professor', 'Dismiss', { duration: 3000 });
              }
            );
          }

    }
  }
}
