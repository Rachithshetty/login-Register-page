import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData: { email: string; password: string } = { email: '', password: '' };

  constructor(private router: Router, private httpClient: HttpClient, private dataService: DataService) {}

  onSubmit() {
    console.log('Login submitted:', this.formData);

    // Check if the email and password exist in the LoopBack data
    this.dataService.getAllAccounts().subscribe((accounts) => {
      const foundAccount = accounts.find(
        (account) => account.email === this.formData.email && account.password === this.formData.password
      );

      if (foundAccount) {
        console.log('Login successful:', foundAccount);
        // Redirect to the dashboard if the account is found
        this.router.navigate(['/dashboard']);
      } else {
        console.error('Login failed: Account not found');
        // Handle login failure (show error message, etc.)
      }
    });
  }
}
