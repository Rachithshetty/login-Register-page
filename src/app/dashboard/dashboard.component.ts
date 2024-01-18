import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service'; 
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  accounts: any[] = [];

  constructor(
    private dataService: DataService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    // Fetch accounts data when the component initializes
    this.dataService.getAllAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }
  getLoggedInUserName() {
    const loggedInUser = this.authService.getLoggedInUser();
    return loggedInUser ? loggedInUser.name : 'User';
  }
}
