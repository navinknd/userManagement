import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '@progress/kendo-angular-dateinputs';
import { AuthGuard } from './auth-guard/auth.guard';
import { CalenderComponent } from './component/home/component/calender/calender.component';
import { EditpageComponent } from './component/home/component/editpage/editpage.component';
import { LogoutComponent } from './component/home/component/logout/logout.component';
import { UserComponent } from './component/home/component/user/user.component';
import { HomeComponent } from './component/home/home.component';
import { LoaderComponent } from './component/loader/loader.component';

import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RegisterComponent },
  {
    path: "home", component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {
        path: "user", component: UserComponent
      },
      {
        path: "calender", component: CalenderComponent
      },
      {
        path: "logout", component: LogoutComponent
      },
      {
        path: "loader", component: LoaderComponent
      },
      {
        path: "edit", component: EditpageComponent
      }
    ]
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "**", component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
