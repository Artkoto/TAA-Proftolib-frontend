
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import {Observable} from 'rxjs';
import{AuthService} from './auth.service';
import{Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProfAuthGuardService implements CanActivate{

  constructor(private authservice : AuthService,
              private router : Router) { }
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(this.authservice.profIsAuth){
      return true ;
    } else {
      this.router.navigate(['profApp/auth']);
      return false;
    }

  }


}
