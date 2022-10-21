import { LoginService } from './../_services/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private LoginService: LoginService,
    private route: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //   let login = localStorage.getItem('Linkuptoken')

    //   if (login) {
    //     this.route.navigate(['/counter'])
    //     return false
    //   }
    //   this.route.navigate(['/choose-color'])

    return true
  }
}
