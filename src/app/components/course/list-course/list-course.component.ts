import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Course } from 'src/app/model/Course';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit{
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchCourse: string = '';

  constructor(private courseService: CourseServiceService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getAllCourses().subscribe(
      (courses) => {
        this.courses = courses;
        this.filteredCourses = [...courses];
      },
      (error) => {
        console.error('Error loading courses:', error);
      }
    );
  }

  deleteCourse(courseId: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(courseId).subscribe(
        () => {
          this.courses = this.courses.filter((course) => course.courseId !== courseId);
          this.filteredCourses = this.filteredCourses.filter((course) => course.courseId !== courseId);
          this.snackBar.open('Course deleted successfully', 'Dismiss', { duration: 3000 });
        },
        (error) => {
          console.error('Error deleting course', error);
          this.snackBar.open('Error deleting course', 'Dismiss', { duration: 3000 });
        }
      );
    }
  }

  searchCourseList(): void {
    if (this.searchCourse) {
      const searchTerm = this.searchCourse.trim().toLowerCase();
      this.filteredCourses = this.courses.filter((course) => {
        return (
          course.courseName.toLowerCase().includes(searchTerm) ||
          course.courseCode.toLowerCase().includes(searchTerm) ||
          course.description.toLowerCase().includes(searchTerm) ||
          course.universityId.toString().toLowerCase().includes(searchTerm)
          // Agrega más campos según sea necesario
        );
      });
    } else {
      this.loadCourses();
    }
  }

  editCourse(course: Course):void{



  }
}
