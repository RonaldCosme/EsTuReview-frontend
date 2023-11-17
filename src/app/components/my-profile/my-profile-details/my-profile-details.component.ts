import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-my-profile-details',
  templateUrl: './my-profile-details.component.html',
  styleUrls: ['./my-profile-details.component.css']
})
export class MyProfileDetailsComponent implements OnInit {

  user: User | null = null; // Asegúrate de importar el modelo User

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserDetails();
  }

  loadUserDetails(): void {
    const userId = this.userService.getCurrentUserId();

    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (user: User) => {
          this.user = user;
        },
        (error) => {
          console.error('Error al obtener detalles del usuario', error);
        }
      );
    }
  }
}