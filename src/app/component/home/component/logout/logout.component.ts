import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { mergeMap, of } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  userData: any;
  message: any;
  constructor(private loginservices: LoginService, private router: Router, private toastr: ToastrService,public dialog:DialogService) {
  }
  ngOnInit(): void {
  }
  removeAccout() {
    this.dialog
    .confirmDialog({
      title: 'Are you sure?',
      message: 'Are you sure you want to do Remove Account?',
      confirmCaption: 'Yes',
      cancelCaption: 'No',
    })
    .subscribe((yes) => {
      if (yes) {
      of(Number(localStorage.getItem('id'))).pipe(mergeMap(id=>this.loginservices.deleteUser(id))).subscribe({
        next:(res) => {
          this.message = res;
          this.toastr.success(this.message.message);
          this.router.navigate(['/register']);
        },error:(err)=>{
          console.log('error',err);
        }
      });
      }  else{
        this.toastr.info("You Cancelled Remove Account!...");
      }         
    });
  }

  logout() {
    this.dialog
      .confirmDialog({
        title: 'Are you sure?',
        message: 'Are you sure you want to do logout?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
      })
      .subscribe((yes) => {
        if (yes) {
          this.toastr.success("logout Successfully!...");
        this.router.navigate(['/login']);
        localStorage.clear();
        }  else{
          this.toastr.info("You Cancelled logout !...");
        }    
      });
  }
}
