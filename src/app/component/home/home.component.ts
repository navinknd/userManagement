import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { mergeMap, of } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any;
  message: any;
  constructor(private loginservices: LoginService, private router: Router, private toastr: ToastrService, public dialog: MatDialog) {
  }
  ngOnInit() {
    of(Number(localStorage.getItem('id'))).pipe(mergeMap(id => this.loginservices.getOneUserData(id))).subscribe({
      next: (res) => {
        console.log("successs", res);
        this.userData = res;
      }, error: (err) => {
        console.log("error", err);
      }
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
  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
    switch (this.selected) {
      case "User":
        this.router.navigate(["home/user"]);
        break;
      case "Edit User":
        this.router.navigate(["home/edit"]);
        break;
      case "Calendar":
        this.router.navigate(["home/calender"]);
        break;
      case "Attachments":
        this.router.navigate(["home/loader"]);
        break;
      case "Favourites":
        this.router.navigate(["home/favorite"]);
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
