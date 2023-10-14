import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword : boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  login() {
    // Replace these with your desired username and password for authentication
    const validUsername = 'myusername';
    const validPassword = 'mypassword';

    if (this.username === validUsername && this.password === validPassword) {
      // Successful login
      console.log('Login successful');
    } else {
      // Failed login
      console.log('Login failed. Please check your username and password.');
    }
  }
}
