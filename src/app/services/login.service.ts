import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { auth, Resister, viewUser } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // apiUrlForLogin = "https://localhost:44362/User";
  apiUrlForLogin:string;
  constructor(private http: HttpClient) {
    this.apiUrlForLogin=environment.api_url;
  }

  getAllUserData(): Observable<viewUser> {
    let dataUrl: string = `${this.apiUrlForLogin}/getAll`;
    return this.http.get<viewUser>(dataUrl).pipe(catchError(this.handleError))
  }
  CreateUserData(data: Resister): Observable<Resister> {
    return this.http.post<Resister>(`${this.apiUrlForLogin}/register`, data)
  }
  AuthUserData(data: auth): Observable<auth> {
    return this.http.post<auth>(`${this.apiUrlForLogin}/authentication`, data)
  }
  UpdateUserData(id: any, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrlForLogin}/update/${id}`, data)
  }
  GetOneUserData(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlForLogin}/${id}`)
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlForLogin}/delete/${id}`)
  }

  getToken() {   
    return localStorage.getItem('token');
  }



  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = 'Something bad happened; please try again later.'
    if (error.error instanceof ErrorEvent) {
      //client error 
      errorMessage = `An error occurred: ${error.error.message}`;
      console.error(errorMessage);
      
    } else {
      //server side error
      errorMessage = `Backend returned code: ${error.status} \n body was:${error.message}`;
      console.error(errorMessage);
    }
    return throwError(errorMessage)
  }
}
