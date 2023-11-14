import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  constructor(private userService: UserService, private router: Router) {}

  logout() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.logout();
        Swal.fire('Logged Out!', 'You have been logged out.', 'success');
        this.router.navigate(['/login']);
      }
    });
  }

  logoutHome() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out and return to home',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.logout();
        Swal.fire('Logged Out!', 'You have been logged out.', 'success');
        this.router.navigate(['/home']);
      }
    });
  }

  userLogged() {
    return this.userService.getCurrentUserId() == null ? false : true;
  }
}
