import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  percent;
  tasks;
  apply = false;
  deg = 360 * this.percent / 100;
  user = localStorage.getItem('username');
  constructor() { }

  ngOnInit() {
    this.tasks = localStorage.getItem('tasks');
    this.tasks = JSON.parse(this.tasks);
    this.percent = this.tasks.length;
  }
  applyClass() {
    if (this.percent > 50) {
      this.apply = true;
      return this.apply;
    }
  }
}
