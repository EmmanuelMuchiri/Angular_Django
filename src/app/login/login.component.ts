import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { UsermanagerService } from '../usermanager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usermanger: UsermanagerService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    console.log('submitted value', this.loginForm.value);
    // This is the time for integrete the login
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.usermanger.authenticate(username, password).subscribe(
      result => {
        // Here we are storing the token and refresh token in the localstorage
        localStorage.setItem('token', result['access']);
        localStorage.setItem('refresh', result['refresh']);
        this.router.navigate(['/dashboard']);
      },

      error => {
        console.log('error');
      }
    );

  }
}
