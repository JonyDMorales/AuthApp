import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  	constructor(private _authService:AuthService) { 
  		_authService.handleAuthentication();
  	}

  	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
  		let log:boolean;
  		if (this._authService.isAuthenticated()) {
  			console.log('Esta logeado');
  			log = true;
  		}else{
  			console.error('No esta logeado');
  			log = false;
  		}
  
  		return log;
  	}

}
