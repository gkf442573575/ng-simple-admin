import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import particlesOptions from './particlesOptions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  message: string = '';
  isShowPw: boolean = false;
  password: string = '';
  username: string = '';
  focusCtorl: string = '';

  particlesOptions = particlesOptions;

  constructor(public authService: AuthService, public router: Router) {
    this.message = this.getMessage();
  }

  ngOnInit(): void {}

  getMessage(): string {
    return this.authService.isLoggedIn ? '已登录' : '未登录';
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      this.authService.username = this.username
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/home';
        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}
