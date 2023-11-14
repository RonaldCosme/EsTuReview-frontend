import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  constructor(private userService: UserService) {}

  logout() {
    this.userService.logout();    
  }

  userLogged() {
    return this.userService.getCurrentUserId()==null?false:true;
  }
}
