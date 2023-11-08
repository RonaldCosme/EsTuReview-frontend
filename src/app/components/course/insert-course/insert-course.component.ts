import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-insert-course',
  templateUrl: './insert-course.component.html',
  styleUrls: ['./insert-course.component.css']
})
export class InsertCourseComponent implements OnInit {
  customCourseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseServiceService,
    private snackBar: MatSnackBar
  ) {
    this.customCourseForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      courseCode: ['', Validators.required],
      description: ['', Validators.required],
      universityId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales si es necesario
  }

  addCustomCourse(): void {
    if (this.customCourseForm.valid) {
      const newCourse = this.customCourseForm.value;

      this.courseService.createCourse(newCourse).subscribe(
        () => {
          console.log('Course added successfully');
          this.customCourseForm.reset();
          this.snackBar.open('Course added successfully', 'Dismiss', { duration: 3000 });
        },
        (error: any) => {
          console.error('Error adding course', error);
          this.snackBar.open('Error adding course', 'Dismiss', { duration: 3000 });
        }
      );
    }
  }
}
