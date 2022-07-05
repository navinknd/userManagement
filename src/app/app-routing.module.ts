import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  { path: '', component: RegisterComponent },
  {

    path: 'home', loadChildren: () => import('./component/home/home.module').then(x => x.HomeModule), 
     canActivate: [AuthGuard]

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
