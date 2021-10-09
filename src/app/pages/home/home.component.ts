import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  isCollapsed = false;
  username: string = '';

  constructor(public authService: AuthService, public router: Router) {
    this.username = this.authService.username;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
