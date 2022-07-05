import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { CalenderComponent } from './component/calender/calender.component';
import { EditpageComponent } from './component/editpage/editpage.component';
import { LogoutComponent } from './component/logout/logout.component';
import { UserComponent } from './component/user/user.component';
import { HomeComponent } from './home.component';



const routes: Routes = [
    {
        path: "", component: HomeComponent,
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }