import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  percent = 90;
  apply = false;
  deg = 360 * this.percent / 100;
  user = localStorage.getItem('username');
  constructor() { }

  ngOnInit() {
  }
  applyClass() {
    if (this.percent > 50) {
      this.apply = true;
      return this.apply;
    }
  }
}
