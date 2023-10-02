import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let params = new HttpParams();
    params = params.append('api_key', 'dfeb942c3e98474bfc05697d43bd1f35');
    params = params.append('language', 'en');

    req = req.clone({
      setHeaders: {
        Accept: 'application/json',
        // Authorization: `Bearer dfeb942c3e98474bfc05697d43bd1f35`
      },
      params: params,
    });
        
    return next.handle(req);
  }
}