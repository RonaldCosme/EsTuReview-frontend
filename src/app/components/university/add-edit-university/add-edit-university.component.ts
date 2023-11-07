import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { University } from 'src/app/model/University';
import { UniversityServiceService } from 'src/app/services/university-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-add-edit-university',
  templateUrl: './add-edit-university.component.html',
  styleUrls: ['./add-edit-university.component.css']
})

export class AddEditUniversityComponent {

  addEditForm!: FormGroup;
  id!: number;
  moodInsert: boolean = true;

  constructor (private formBuilder: FormBuilder, private UniversityServiceService: UniversityServiceService, private router: Router, 
    private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {}


  ngOnInit() {
    this.loadForm();
  }


  loadForm() {

    this.addEditForm = this.formBuilder.group(
      {
      universityId: [''],
      name: [''],
      campus: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      }
      
    );

    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id!=0 && this.id!=undefined) {
      this.moodInsert = false;
      this.UniversityServiceService.getUniversityById(this.id).subscribe( {
        next: (data: University) => {
          this.addEditForm.get('universityId')?.setValue(data.universityId);
          this.addEditForm.get('name')?.setValue(data.name);
          this.addEditForm.get('campus')?.setValue(data.campus);
          this.addEditForm.get('location')?.setValue(data.location);
          this.addEditForm.get('description')?.setValue(data.description);
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        }
      })
    } else {
      this.id = 0;
      this.moodInsert = true;

    };
  }


  saveUniversity() {
    const university: University = {
      universityId: this.addEditForm.get('universityId')?.value,
      name: this.addEditForm.get('name')?.value,
      campus: this.addEditForm.get('campus')?.value,
      location: this.addEditForm.get('location')?.value,
      description: this.addEditForm.get('description')?.value,
    };

    if (this.moodInsert){
      this.UniversityServiceService.createUniversity(university).subscribe({
      next:(data) => {
        this.router.navigate(['/university']);
        this.snackBar.open('University created successfully!', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }, 

      error: (err)=>{
        console.log(err);
        this.snackBar.open('Error creating university', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
      });
    }else{
      this.UniversityServiceService.updateUniversity(this.id ,university).subscribe({
        next:(data)=>{
          this.router.navigate(['/university']);
          this.snackBar.open('University updated successfully!', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        },
        error: (err)=>{
          console.log(err);
          this.snackBar.open('Error updating university', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/university']);
  }

}

  

     



















   


