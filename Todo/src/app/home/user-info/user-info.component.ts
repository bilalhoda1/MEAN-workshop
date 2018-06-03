import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
 team;
 convert;
 count = 0;
 member;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((parameters) => {
      console.log(parameters);
      this.convert = localStorage.getItem('team');
      this.team = JSON.parse(this.convert);
      console.log(this.team);
      for (let i = 0; i < this.team.length; i++) {
        if ( parameters.email === this.team[i].email) {
            break;
        }
        this.count += 1;
      }
      this.member = this.team[this.count];
      console.log(this.member);
    });
  }

}
