// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Promise<boolean> {
  //   return this.afAuth.authState.toPromise().then((user) => {
  //     if (user) {
  //       return true; // User is authenticated, allow access
  //     } else {
  //       this.router.navigate(['/login']); // Redirect to the login page
  //       return false; // User is not authenticated, block access
  //     }
  //   });
  // }
}
