// login.component.ts
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // email: string = '';
  // password: string = '';

  // constructor(private afAuth: AngularFireAuth) {}

  // login() {
  //   this.afAuth.signInWithEmailAndPassword(this.email, this.password)
  //     .then(() => {
  //       // Login successful, redirect to a protected route
  //     })
  //     .catch((error : string) => {
  //       console.error('Login error:', error);
  //     });
  // }
}
