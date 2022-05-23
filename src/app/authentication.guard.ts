import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { decode } from 'punycode';
import { Observable } from 'rxjs';
import { AuthguradService } from './services/authgurad.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authguradService:AuthguradService,
    private route:Router
  )
  {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    const expectedRole = route.data['expectedRole'];
    const token = JSON.parse(localStorage.getItem('user') || 'null');
    // const tokenPayload = decode(token);    
    if (!this.authguradService.gettoken()) {  
      this.route.navigate(['login'])
  }  
  return true;
  // return this.authguradService.gettoken();  
  // console.log( route.data['Permission']( (ai: any) => this.authguradService.getuser().includes(ai) ));
  // return route.data['Permission']( (ai: any) => this.authguradService.getuser().includes(ai) );
  // console.log(this.authguradService.getPermission())
  // return this.authguradService.getPermission();  
  }
  
  
}
