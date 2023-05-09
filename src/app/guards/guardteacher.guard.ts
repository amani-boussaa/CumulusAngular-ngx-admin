import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardteacherGuard implements CanActivate {
  constructor(private as: AuthService, private route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return new Promise((resolve, reject) => {
      if (this.as.isUserLoggedIn(this.as.ROLE_TEACHER) == true) {
        resolve(true)
      } else {
        this.route.navigate(['auth/login'], { queryParams: { returnUrl: state.url } })
        resolve(false)
      }
    })
  }
}
