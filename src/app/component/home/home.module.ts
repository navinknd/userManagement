import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule, PDFModule, ExcelModule, PagerModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ToastrModule } from 'ngx-toastr';
import { CalenderComponent } from './component/calender/calender.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { EditpageComponent } from './component/editpage/editpage.component';
import { LogoutComponent } from './component/logout/logout.component';
import { UserComponent } from './component/user/user.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
       LayoutModule, GridModule, PDFModule, ExcelModule, ChartsModule, MatButtonModule,HomeRoutingModule,CommonModule,
       MatDialogModule, MatIconModule, DialogsModule,
       ReactiveFormsModule, FormsModule, HttpClientModule, ToastrModule.forRoot({
        timeOut: 2000,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        closeButton: true,
      }), ButtonsModule, InputsModule, DateInputsModule, PagerModule
    ],
    declarations: [HomeComponent,
        UserComponent,
        CalenderComponent,
        LogoutComponent,
        DialogComponent,
        EditpageComponent,
    ], providers:[
	],
})
export class HomeModule { }