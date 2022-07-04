import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { auth } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: any;
  password: string = "password";
  loginForm !: FormGroup;
  login: boolean = true;
  register: boolean = false;
  constructor(private fb: FormBuilder, private loginservices: LoginService, private route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initializeFormData();
  }
  initializeFormData() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
  onFormSubmit(val: NgForm) {
    var authData = new auth();
    authData.username = this.loginForm.value.userName;
    authData.password = this.loginForm.value.password;
    this.loginservices.AuthUserData(authData).subscribe(res => {
      this.message = res;
      console.log(this.message, "token");
      if (this.message.message) {
        this.toastr.success(this.message.message);
      }
      if (this.message.token !== null) {
        console.log(this.message.data.token, "token");

        localStorage.setItem('token', this.message.data.token)
        this.route.navigate(["/home"]);
        localStorage.setItem("id", this.message.data.id)
      }

      this.loginForm.reset();
    }, err => {
      if (err.error.title) {
        var message = "fill every field"
        err.error.title = message;
        this.toastr.warning(err.error.title);
      } else
        this.toastr.warning(err.error.message);
      console.log(err, "err in auth method");
    })

  }
  showregister() {
    localStorage.clear();
    this.register = true;
    this.login = false;
  }
  show() {
    this.password = "text"
  }
  unshow() {
    this.password = "password"
  }
}
