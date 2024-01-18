import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  username: string = "User";
  accounts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Fetch accounts data when the component initializes
    this.dataService.getAllAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }
}
