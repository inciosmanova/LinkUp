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
  Registration(postForm:Registeruser){
    return this.http.post<Registeruser>(this.baseUrl + 'User/registeruser',postForm)
  }
}
