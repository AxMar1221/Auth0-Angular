import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( public auth: AuthService ){}
  canActivate(
   route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    return this.auth.isAuthenticated$.pipe( 
      tap((loggedIn: any) => {
        if (!loggedIn){
          this.auth.login(state.url)
        }
      })
    )
  } 
}