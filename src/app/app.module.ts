import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginService } from './services/login.service';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FloatingLabelModule } from "@progress/kendo-angular-label";
import { LayoutModule } from "@progress/kendo-angular-layout";
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { PagerModule } from '@progress/kendo-angular-pager';
import { LoaderComponent } from './component/loader/loader.component';
import { DialogsModule } from "@progress/kendo-angular-dialog";
import { JwtInterceptor } from './services/jwt.interceptor';
import { AuthGuard } from './auth-guard/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule, LayoutModule, GridModule, PDFModule, ExcelModule, ChartsModule, MatButtonModule,
    AppRoutingModule, FloatingLabelModule, MatDialogModule, MatIconModule, DialogsModule,
    BrowserAnimationsModule, ReactiveFormsModule, FormsModule, HttpClientModule, ToastrModule.forRoot({
      timeOut: 2000,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
    }), ButtonsModule, InputsModule, DateInputsModule, PagerModule],
  providers: [LoginService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
