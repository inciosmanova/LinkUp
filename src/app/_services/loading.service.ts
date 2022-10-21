import { Inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  busyRequestCount = 0;
  constructor(private spinnerService: NgxSpinnerService) { }
  public showSpinner() {
    this.busyRequestCount++;
    this.spinnerService.show()
  }


  public hideSpinner() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide()
    }
  }
}
