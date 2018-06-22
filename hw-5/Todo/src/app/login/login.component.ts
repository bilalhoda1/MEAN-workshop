import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  email = '';
  password: string;
  constructor(
    public snackBar: MatSnackBar,
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { this.rForm = fb.group(
    {'email': [null, Validators.required],
    'password': [null, Validators.required],
    'validate': ''
    }
  );
}

  ngOnInit() {
  }


  save(form) {
    if (form.valid) {
      console.log(form);
      this.auth.login(form.value)
        .subscribe((result) => {
          this.router.navigate(['./home']);
          console.log(result);
          this.snackBar.open('Login', 'successful', {
            duration: 2000,
          });
        }, (err) => {
          alert('something went wrong' + JSON.stringify(err));
        });
    } else {
      alert('Please enter the required fields');
    }
  }

}
