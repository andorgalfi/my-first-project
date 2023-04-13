import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  public credentials: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    pass: new FormControl('', [Validators.required, Validators.min(8), Validators.pattern('^[a-zA-Z0-9_]+$')])
  });

  constructor(private router: Router) {

  }

  login() {
    this.credentials.updateValueAndValidity();
    if (this.credentials.controls['email'].value === 'User@test.com' 
    && this.credentials.controls['pass'].value === 'testtest') {
      this.router.navigate(['/statistics']);
    }
  }
}
