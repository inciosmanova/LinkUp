import { LoginObj, LoginResponse, ForgetPwd } from './../_model/login';
import { ResultRegister, RegisterCode } from './../_model/registeruser';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
    return this.http.post<ResultRegister>(this.baseUrl + 'User/verifysms', optCode)
  }
  LoginUser(loginForm: LoginObj) {
    return this.http.post<LoginResponse>(this.baseUrl + 'User/loginuser', loginForm)
  }

  ForgetPassword(phone: { phonenumber: string }) {
    return this.http.post<ResultRegister>(this.baseUrl + 'User/forgotpassword', phone)

  }
  ForgetPasswordConfirm(form: ForgetPwd) {
    return this.http.post<ResultRegister>(this.baseUrl + 'User/forgotpasswordconfirm', form)

  }



}
