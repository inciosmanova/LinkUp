import { LoadingService } from 'src/app/_services/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(public spinner: LoadingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.showSpinner();
    return next.handle(request).pipe(
      finalize(() => this.spinner.hideSpinner())
    )
  }
}
