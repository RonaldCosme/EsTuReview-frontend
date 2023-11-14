import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  constructor(private userService: UserService) {}

  logout() {
    this.userService.logout();    
  }

  userLogged() {
    return this.userService.getCurrentUserId()==null?false:true;
  }
}
