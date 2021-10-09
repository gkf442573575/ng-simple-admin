import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {

  isCollapsed = false;
  username: string = '';

  constructor(public authService: AuthService) {
    this.username = this.authService.username
  }

  logout(){
    console.log('1')
    this.authService.logout();
  }
}
