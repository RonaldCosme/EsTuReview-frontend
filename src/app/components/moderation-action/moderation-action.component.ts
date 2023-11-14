import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-moderation-action',
  templateUrl: './moderation-action.component.html',
  styleUrls: ['./moderation-action.component.css']
})
export class ModerationActionComponent {
  constructor(private userService: UserService) {}

  logout() {
    this.userService.logout();    
  }

  userLogged() {
    return this.userService.getCurrentUserId()==null?false:true;
  }
}
