import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '../../shared/constants';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const [route, params] = request.url.split('?');
    const newUrl = `${route}?key=${API_KEY}&${params}`;
    return next.handle(request.clone({ url: newUrl }));
  }
}
