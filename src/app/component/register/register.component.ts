import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Resister } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //  @ViewChild('fileInput') fileInput:any;
  loading: boolean = false;

  authType = '';
  title = '';
  buttonTitle = '';
  buttonTitlelink = ''
  tickIcon = "fa-solid fa-circle-check";
  xmarkIcon = "fa-solid fa-circle-xmark";
  message: any;
  passwordType = "password";
  UserForm: FormGroup;
  getDataApi: any
  constructor(private fb: FormBuilder, private loginservices: LoginService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router) {
    this.UserForm = fb.group({});
  }
  ngOnInit(): void {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
      this.title = (this.authType === 'register') ? 'Already have an account?...' : 'Create a new Account';
      this.buttonTitle = (this.authType === "login") ? 'login' : 'Register';
      this.buttonTitlelink = (this.authType !== "login") ? 'login' : 'Register';
    });

    this.initializeFormData();
  }
  initializeFormData() {
    this.UserForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      fullname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/)]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]]
    })
    // this.UserForm = this.fb.group({
    //   userName: this.fb.control('',[Validators.required]),
    //   fullname: this.fb.control('',[Validators.required]),
    //   password: this.fb.control('',[Validators.required]),
    //   mobileNumber: this.fb.control('',[Validators.required])
    // });
  }

  //get set values method;-
  public get userName(): FormControl {
    return this.UserForm.get('userName') as FormControl;
  }
  public get fullname(): FormControl {
    return this.UserForm.get('fullname') as FormControl;
  }
  public get password(): FormControl {
    return this.UserForm.get('password') as FormControl;
  }
  public get mobileNumber(): FormControl {
    return this.UserForm.get('mobileNumber') as FormControl;
  }
  public get file(): FormControl {
    return this.UserForm.get('file') as FormControl;
  }

  onFormSubmit(val: NgForm, valid: boolean) {
    if (valid === true) {
      var registerData = new Resister();
      registerData.fullName = this.UserForm.value.fullname;
      registerData.username = this.UserForm.value.userName;
      registerData.mobileNumber = this.UserForm.value.mobileNumber;
      registerData.password = this.UserForm.value.password;
      this.loading = true;
      this.loginservices.createUserData(registerData).subscribe({
        next: (res) => {
          this.loading = false;
          this.message = res;
          if (this.message.message) {
            this.toastr.success(this.message.message);
          }
          this.UserForm.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          if (err.error.isTrusted === true) {
            this.toastr.warning("Something Went Wrong!...");
          } else if (err.error.title) {
            var message = "fill every field"
            err.error.title = message;
            this.toastr.warning(err.error.title);
          }
          else {
            this.toastr.warning(err.error.message);
          }
          this.loading = false;
        }
      });
    } else {
      this.toastr.warning("fill every field");
    }

  }
  showlogin() {
    this.router.navigate(["/login"]);
    localStorage.clear();

  }
  show() {
    this.passwordType = "text"
  }
  unshow() {
    this.passwordType = "password"
  }




}


