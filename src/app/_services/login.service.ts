import { LoginObj, LoginResponse, ForgetPwd } from './../_model/login';
import { ResultRegister, RegisterCode } from './../_model/registeruser';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Color } from '../_model/color';
import { Registeruser } from '../_model/registeruser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }
  GetColors() {
    return this.http.get<Color[]>(this.baseUrl + 'Home/getcolors')
  }
  Registration(postForm: Registeruser) {
    return this.http.post<ResultRegister>(this.baseUrl + 'User/registeruser', postForm)
  }

  RegisterCode(optCode: RegisterCode) {
    return this.http.post<ResultRegister>(this.baseUrl + 'User/verifysms', optCode).pipe(
      map((Response: LoginResponse) => {
        debugger
        console.log(Response)
        const result = Response;
        if (result.isSuccess) {
          localStorage.setItem("Linkuptoken", result.token.accessToken);
        }
        return Response;
      })
    )
  }
  LoginUser(loginForm: LoginObj) {
    debugger
    return this.http.post<LoginResponse>(this.baseUrl + 'User/loginuser', loginForm).pipe(
      map((Response: LoginResponse) => {
        debugger
        console.log(Response)
        const result = Response;
        if (result.isSuccess) {
          localStorage.setItem("Linkuptoken", result.token.accessToken);
        }
        return Response;
      })
    )
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = '' + err.error;
    } else {
      errorMessage = '' + err.error
    }
    return throwError(errorMessage)
      ;
  }



  loggedIn() {
    const token = localStorage.getItem("Linkuptoken");
    return token ? true : false
  }
  logOut() {
    localStorage.removeItem("Linkuptoken")
  }
  ForgetPassword(phone: { phonenumber: string }) {
    return this.http.post<ResultRegister>(this.baseUrl + 'User/forgotpassword', phone)

  }
  ForgetPasswordConfirm(form: ForgetPwd) {
    return this.http.post<ResultRegister>(this.baseUrl + 'User/forgotpasswordconfirm', form)

  }



}
