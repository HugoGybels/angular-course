import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {StudentService} from './student.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private studentService: StudentService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.studentService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
