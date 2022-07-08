import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { auth } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authType = '';
  title = '';
  buttonTitle = '';
  buttonTitlelink = ''

  message: any;
  password: string = "password";
  loginForm !: FormGroup;
  loading: boolean = false;
  getDataApi: any;
  constructor(private fb: FormBuilder, private loginservices: LoginService, private route: Router, private toastr: ToastrService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
      this.title = (this.authType === 'register') ? 'Already have an account?...' : 'Create a new Account?...';
      this.buttonTitle = (this.authType === "login") ? 'login' : 'Register';
      this.buttonTitlelink = (this.authType !== "login") ? 'login' : 'Register';
    });

    this.initializeFormData();
  }
  initializeFormData() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

    public get userName(): FormControl {
    return this.loginForm.get('userName') as FormControl;
  }

   public get pass(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onFormSubmit(val: NgForm) {
    var authData = new auth();
    authData.username = this.loginForm.value.userName;
    authData.password = this.loginForm.value.password;
    this.loading = true;
    this.getDataApi = this.loginservices.authUserData(authData).subscribe({
      next: (res) => {
        this.loading = false;
        this.message = res;
        if (this.message.message) {
          this.toastr.success(this.message.message);
        }
        if (this.message.token !== null) {
          localStorage.setItem('token', this.message.data.token)
          this.route.navigate(["home/user"]);
          localStorage.setItem("id", this.message.data.id)
        }
        this.loginForm.reset();
      }, error: (err) => {
        if (err.error.isTrusted === true) {
          this.toastr.warning("Something Went Wrong!...");
        } else if (err.error.title) {
          var message = "fill every field"
          err.error.title = message;
          this.toastr.warning(err.error.title);
        } else {
          this.toastr.warning(err.error.message);
        }
        this.loading = false;
      }
    })
  }
  showregister() {
    this.route.navigate(["/register"]);
    localStorage.clear();
  }
  show() {
    this.password = "text"
  }
  unshow() {
    this.password = "password"
  }

}
