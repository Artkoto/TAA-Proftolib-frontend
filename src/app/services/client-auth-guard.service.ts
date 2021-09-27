
//services pour manipuler les oppérations d'authentifications (utilisation de Observable et pipe)
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import{AuthService} from './auth.service';
import{Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ClientAuthGuardService implements CanActivate{

  constructor(private authservice : AuthService,
              private router : Router) { }
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(this.authservice.clientIsAuth){
      return true ;
    } else {
      this.router.navigate(['clientApp/auth']);
      return false;
    }

  }


}
