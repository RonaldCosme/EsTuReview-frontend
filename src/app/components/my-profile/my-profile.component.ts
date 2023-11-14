import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
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
