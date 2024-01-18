import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formData: { name: string; email: string; phone: string; password: string } = { name: '', email: '', phone: '', password: '' };

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authService: AuthenticationService
  ) {}

  onSubmit() {
    console.log('Registration submitted:', this.formData);

  // Perform registration logic and make HTTP POST request
  this.httpClient.post('http://localhost:3000/api/accounts', this.formData).subscribe(
    (response) => {
      console.log('Registration successful:', response);
    // Use AuthenticationService methods for handling login
    this.authService.setLoggedInUser(response);
    this.authService.login(this.formData.email, this.formData.password);

    this.router.navigate(['/dashboard']);
  }, (error) => {
    console.error('Registration failed:', error);
    // Handle registration failure
  });
}
}
