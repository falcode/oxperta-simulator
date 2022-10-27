import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        // 'Authorization': `Bearer ${'e7678d365emshbcfe3d4c402c3b3p1a0d9djsn1b0db02c4617'}`,
      },
    });

    return next.handle(req);
  }
}