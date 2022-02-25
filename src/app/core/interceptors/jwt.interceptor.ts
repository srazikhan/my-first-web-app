import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtToken:any = localStorage.getItem('token');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`,
        paymentStatus: `Payment is pending`
      }
    });
    return next.handle(request);
  }
}
