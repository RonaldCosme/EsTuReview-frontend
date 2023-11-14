import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent {
  constructor(private userService: UserService) {}

  logout() {
    this.userService.logout();    
  }

  userLogged() {
    return this.userService.getCurrentUserId()==null?false:true;
  }
}
