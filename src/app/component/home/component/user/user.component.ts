import { Component, OnInit } from '@angular/core';
import { PagerPosition } from '@progress/kendo-angular-grid';
import { PagerSettings, PagerType } from '@progress/kendo-angular-grid/pager/pager-settings';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pagesize: 5 | 10 | 20 | 40 = 10;
  pagesizes: [5, 10, 20, 40] = [5, 10, 20, 40]
  result: any;
  userslist: any;
  opened: boolean = true;
 
  isVisible:boolean=true;

  public position: PagerPosition = "bottom";
  public info = true;
  public prevNext = true;
  public type: PagerType = "input";

  constructor(private loginservices: LoginService) { }

  ngOnInit(): void {
    this.loginservices.getAllUserData().subscribe(res => {
      this.result = res;
      this.userslist = this.result.data;
    });
  }

  public pagerSettings(): PagerSettings {
    return {
      position: this.position,
      info: this.info,
      previousNext: this.prevNext,
      type: this.type,
    }
  }

  editUser(event: any) {
     console.log(event);
  }
  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }
  // toggleField(id:any) {
  //   console.log("toggle----",id);
  //   this.userslist.map((el: any) => {
  //     if(el.id == id) {
  //       el.isVisible = true;
  //     } else {
  //       el.isVisible = false;
  //     }
  //   })   
  // }

  // updateField(id:any){   
  //   this.userslist.map((el: any) => {
  //     if(el.id == id) {
  //       el.isVisible = false;
  //     } else {
  //       el.isVisible = false;
  //     }
  //   })
  // }
}
