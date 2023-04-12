import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  public email: string = '';
  public pass: string = '';
  public check: boolean = false;
  public errorShow: boolean = false;

  constructor(private router: Router) {

  }

  login() {
    if (this.email === 'User' && this.pass === 'test' && this.check) {
      this.errorShow = false;
      this.router.navigate(['/statistics']);
    } else {
      this.errorShow = true;
    }
  }

  checkbox() {
    this.check = !this.check;
  }
}
