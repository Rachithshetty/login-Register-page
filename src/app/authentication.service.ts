// authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000/api/accounts'; // Adjust the URL based on your LoopBack API endpoint
  private loggedInUser: any;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  logout(): void {
    this.loggedInUser = null;
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }

  setLoggedInUser(user: any): void {
    this.loggedInUser = user;
  }
}
