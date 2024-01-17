import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData: { email: string; password: string } = { email: '', password: '' };

  constructor(private router: Router) {} 

  onSubmit() {
    console.log('Login submitted:', this.formData);
    // login logic here

    
    this.router.navigate(['/dashboard']);
  }
}
