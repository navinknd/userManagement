import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let loginService = this.injector.get(LoginService);
    let tokenizedReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${loginService.getToken()}`
      },
      
    })
    return next.handle(tokenizedReq);
  }}
  //   .pipe(
  //     map((responce) => {
  //       if(responce instanceof HttpResponse){
  //         var list=responce.body.data;          
  //         for (const data of list) {
  //           data.isVisible=false;
  //          }         
  //         return responce
  //       }
  //      return responce})
  //   )
  // }
// }
