import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: any;
  userData: any;
  message: any;
  constructor(private loginservices: LoginService, private router: Router, private toastr: ToastrService,public dialog: MatDialog) {
    this.id = localStorage.getItem('id')
    console.log(this.id, "id");
  }
  ngOnInit() {


    this.loginservices.GetOneUserData(this.id).subscribe(res => {
      this.userData = res.data;
      console.log(this.userData);
      
    })
  }
 
  public selected = "User";

  public items: Array<DrawerItem> = [
    { text: "User", icon: "k-i-user", selected: true },
    { text: "Edit User", icon: "k-i-bell" },
    { text: "Calendar", icon: "k-i-calendar" },
    { text: "Attachments", icon: "k-i-hyperlink-email" },
    { text: "Favourites", icon: "k-i-star-outline" },
    // { separator: true },
    { text: "Logout", icon: "k-i-logout" },
    { text: "Security", icon: "k-i-settings" },

  ];
  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(CalenderComponent, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }
  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
    console.log(this.selected);
    switch (this.selected) {
      case "User":
        this.router.navigate(["home/user"]);
        break;
      case "Edit User":
        this.router.navigate(["home/edit"])
        // this.router.navigate(["home/edit/id"]);
        break;
      case "Calendar":
        this.router.navigate(["home/calender"]);
        break;
      case "Attachments":
        this.router.navigate(["home/loader"]);
        break;
      case "Favourites":
        this.router.navigate(["home/loader"]);
        break;
      case "Logout": this.router.navigate(['home/logout'])

        break;
      case "Security":
        this.router.navigate(["home/loader"]);
        break;

      default:
        break;
    }


  }
}
