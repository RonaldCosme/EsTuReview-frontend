import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/model/Course';
import { University } from 'src/app/model/University';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { UniversityServiceService } from 'src/app/services/university-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insert-course',
  templateUrl: './insert-course.component.html',
  styleUrls: ['./insert-course.component.css']
})
export class InsertCourseComponent implements OnInit {
  customCourseForm: FormGroup;
  universities: University[] = [];
  courseId!: number;
  modoInsertar: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseServiceService,
    private universityService: UniversityServiceService,
    private snackBar: MatSnackBar,
    private router: Router,  
    private activatedRoute: ActivatedRoute
  ) {
    this.customCourseForm = this.formBuilder.group({
      courseId: [""],
      courseName: ['', Validators.required],
      courseCode: ['', Validators.required],
      description: ['', Validators.required],
      universityId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUniversities();
    this.courseId = this.activatedRoute.snapshot.params['courseId'];

    if (this.courseId !== 0 && this.courseId !== undefined) {
      this.modoInsertar = false;
      this.courseService.getCourseById(this.courseId).subscribe(
        {
          next: (data: Course) => {
            this.customCourseForm.get("courseId")?.setValue(data.courseId);
            this.customCourseForm.get("courseName")?.setValue(data.courseName);
            this.customCourseForm.get("courseCode")?.setValue(data.courseCode);
            this.customCourseForm.get("description")?.setValue(data.description);
            this.customCourseForm.get("universityId")?.setValue(data.universityId);
          },
          error: (err) => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Error retrieving course information',
              timer: 3000,
              showConfirmButton: false
            });
          }
        }
      );
    } else {
      this.courseId = 0;
      this.modoInsertar = true;
    }
  }

  loadUniversities(): void {
    this.universityService.getAllUniversities().subscribe(
      (universities) => {
        this.universities = universities;
      },
      (error) => {
        console.error('Error loading universities:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error loading universities',
          timer: 3000,
          showConfirmButton: false
        });
      }
    );
  }

  addCustomCourse(): void {
    if (this.customCourseForm.valid) {
      const newCourse = this.customCourseForm.value;

      const actionText = this.modoInsertar ? 'added' : 'updated';

      this.courseService.createCourse(newCourse).subscribe(
        () => {
          console.log('Course ' + actionText + ' successfully');
          this.customCourseForm.reset();
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Course ' + actionText + ' successfully',
            timer: 3000,
            showConfirmButton: false
          });

          // Navega a la vista CourseComponent después de ejecutar la función
          this.router.navigate(['/course']);
        },
        (error: any) => {
          console.error('Error ' + (this.modoInsertar ? 'adding' : 'updating') + ' course', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error ' + (this.modoInsertar ? 'adding' : 'updating') + ' course',
            timer: 3000,
            showConfirmButton: false
          });

          this.router.navigate(['/course']);
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all required fields',
        timer: 3000,
        showConfirmButton: false
      });

      this.router.navigate(['/course']);
    }
  }
}
