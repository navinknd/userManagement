import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, debounce, debounceTime, delay, from, map, Observable, of, retry, retryWhen, scan, shareReplay, throwError,Subject ,ReplaySubject} from 'rxjs';
import { first, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { auth, Resister, viewUser } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})



export class LoginService {
  // behaSub!: BehaviorSubject<any>;
  // behaOb$!: Observable<any>;

  apiUrlForLogin: string;
  constructor(private http: HttpClient) {
    this.apiUrlForLogin = environment.api_url;
    // this.behaSub = new BehaviorSubject<any>(null);
    // this.behaOb$ = this.behaSub.asObservable();
  }


  getAllUserData(): Observable<viewUser> {
    let dataUrl: string = `${this.apiUrlForLogin}/getAll`;
    return this.http.get<viewUser>(dataUrl).pipe(catchError(this.handleError)).pipe(map((res: any) => res));
  }
  createUserData(data: Resister): Observable<Resister> {
    return this.http.post<Resister>(`${this.apiUrlForLogin}/register`, data).pipe(map(res => res));
  }
  authUserData(data: auth): Observable<auth> {
    return this.http.post<auth>(`${this.apiUrlForLogin}/authentication`, data).pipe(map(res => res));
  }
  updateUserData(id: any, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrlForLogin}/update/${id}`, data).pipe(map(res => res));
  }
  getOneUserData(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlForLogin}/${id}`).pipe(map(res => res));
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlForLogin}/delete/${id}`).pipe(map(res => res));
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

  // setBehaData(data:number) {
  //   this.behaSub.next(data);
  // }


}
