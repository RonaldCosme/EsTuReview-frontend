import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { University } from 'src/app/model/University';
import { UniversityServiceService } from 'src/app/services/university-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';  // Import SweetAlert

@Component({
  selector: 'app-add-edit-university',
  templateUrl: './add-edit-university.component.html',
  styleUrls: ['./add-edit-university.component.css']
})
export class AddEditUniversityComponent implements OnInit {
  addEditForm!: FormGroup;
  id!: number;
  moodInsert: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private universityService: UniversityServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.addEditForm = this.formBuilder.group({
      universityId: [""],
      name: [""],
      campus: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      location: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    });

    this.id = this.activatedRoute.snapshot.params['universityId'];
    if (this.id != 0 && this.id != undefined) {
      this.moodInsert = false;
      this.universityService.getUniversityById(this.id).subscribe({
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
      });
    } else {
      this.id = 0;
      this.moodInsert = true;
    }
  }

  saveUniversity() {
    const university: University = {
      universityId: this.addEditForm.get('universityId')?.value,
      name: this.addEditForm.get('name')?.value,
      campus: this.addEditForm.get('campus')?.value,
      location: this.addEditForm.get('location')?.value,
      description: this.addEditForm.get('description')?.value,
    };

    if (this.moodInsert) {
      this.universityService.createUniversity(university).subscribe({
        next: (data) => {
          this.router.navigate(['/university']);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'University created successfully!',
            timer: 3000,
            showConfirmButton: false
          });
        },
        error: (err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error creating university',
            timer: 3000,
            showConfirmButton: false
          });
        }
      });
    } else {
      this.universityService.updateUniversity(this.id, university).subscribe({
        next: (data) => {
          this.router.navigate(['/university']);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'University updated successfully!',
            timer: 3000,
            showConfirmButton: false
          });
        },
        error: (err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error updating university',
            timer: 3000,
            showConfirmButton: false
          });
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/university']);
  }
}
