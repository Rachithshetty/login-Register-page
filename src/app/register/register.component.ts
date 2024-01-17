import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formData: { name: string; email: string; phone: string; password: string } = { name: '', email: '', phone: '', password: '' };

  constructor(private router: Router) {} 

  onSubmit() {
    console.log('Registration submitted:', this.formData);
    // registration logic here

    
    this.router.navigate(['/dashboard']);
  }
}
