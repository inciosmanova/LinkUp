import { LoginService } from 'src/app/_services/login.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import { GlobalService } from 'src/services/auth/global.service';
import { MatDialog } from '@angular/material/dialog';
// import { LoginComponent } from 'src/app/auth/components/login/login.component';
// import { showConfirmAlert, showInfoAlert } from 'src/utils/alert';
// import { GetLanguageContentService } from 'src/services/languages/getLanguageContent.service';
// import { AlertService } from 'src/services/alert.service';
//

@Injectable()
export class UnAuthorizedInterceptor implements HttpInterceptor {
  constructor(private router: Router,
    private refreshtoken: LoginService,
    private dialog: MatDialog,
    // private getLanguageService: GetLanguageContentService,
    // private alertService: AlertService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      headers: request.headers
        .set('Authorization', `Bearer ${localStorage.getItem('Linkuptoken')}`)
        // .set('Accept-Language', ` ${localStorage.getItem('language')}`)
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
    });
    return next.handle(request).pipe(
      catchError(err => {

        // if (err.status === 401) {
        //   const lsRfToken = localStorage.getItem('refreshToken')
        //   this.refreshtoken.refToken = lsRfToken == null ? undefined : lsRfToken;
        //   let requestData = {
        //     refreshToken: this.refreshtoken.refToken
        //   }
        //   localStorage.removeItem('token')
        //   localStorage.removeItem('refreshToken')

        //   this.refreshtoken.refreshToken(requestData).subscribe({
        //     next: (result: any) => {
        //       if (result.statusCode == 200) {
        //         localStorage.setItem('token', result.data.token);
        //         localStorage.setItem('refreshToken', result.data.refreshToken);
        //         showInfoAlert('Məlumat', 'İcazəniz yenilənir', false, false, '', '', 2000)
        //       }
        //       Swal.close()
        //       if (result.statusCode == 2005) {
        //         localStorage.removeItem('token')

        //         localStorage.removeItem('refreshToken')
        //         showConfirmAlert(this.alertService.alertData?.alertTitle, 'Sistemə giriş icazənizin vaxtı bitmişdir. Əməliyyatlara davam etmək üçün "Daxil ol" düyməsinə klik edin', 'Daxil ol', 'Bağla').then((result) => {
        //           if (result.isConfirmed) {
        //             const dialogRef = this.dialog.open(LoginComponent, {
        //               data: { id: 1 },
        //               height: '79vh',
        //               panelClass: 'dialog',
        //               width: '590px',
        //               hasBackdrop: true,
        //               disableClose: true
        //             })

        //           } else if (result.isDenied) {
        //             this.router.navigate(['auth/login'])
        //             Swal.close()
        //           }
        //         })
        //       }
        //     },
        //     error: (result: any) => {

        //     }
        //   })

        //   return of(err);
        // }
        if (err.status === 401 || err.status === 403) {
          //navigate /delete cookies or whatever
          Swal.fire("Unauthorized", "Sayta daxil olun!", "error").then(() => this.router.navigateByUrl(`/`));
          // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
          return of(err.message); // or EMPTY may be appropriate here
        }
        throw err;
      })
    );
  }
}
