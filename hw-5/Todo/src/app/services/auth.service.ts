import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoginResp } from '../../models/login-resp';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  email: string;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('todo-app_token');
  }

  login(credentials) {
    return this.http.post<LoginResp>('http://localhost:3000/user/login', {
      user: credentials
    })
    .pipe(
      tap((response) => {
        this.token = response.user.token;
        localStorage.setItem('todo-app_token', this.token);
      })
    );
  }
  signup(registration) {
    return this.http.post<any>('http://localhost:3000/user/signup', {
      user: registration
    });
  }
  logout() {
    this.token = '';
    localStorage.removeItem('todo-app_token');
  }
}
