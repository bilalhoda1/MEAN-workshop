import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { GetUsersResults } from '../../interfaces/get-users-results';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  team: string;
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((response: GetUsersResults) => {
        console.log(response);
        this.users = response.results;
        this.team = JSON.stringify(this.users);
        localStorage.setItem('team', this.team);
      });
  }

  showUser(user) {
    console.log(user.name.first);
  //  console.log(user.email);
  this.router.navigate(['../user-info/' + user.email],   {relativeTo: this.route});
  }

}
