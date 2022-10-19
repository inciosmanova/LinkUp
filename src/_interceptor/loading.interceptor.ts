import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { LoadingService } from 'src/app/_services/loading.service';
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private readonly busyService: LoadingService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.busy();
    return next.handle(request).pipe(
      finalize(() => this.busyService.idle())
    );
  }
}
