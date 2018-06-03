import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './home/todos/todos.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './home/users/users.component';
import { UsersService } from './services/users.service';
import { UserInfoComponent } from './home/user-info/user-info.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    {path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent,
    children: [
      { path: 'users', component: UsersComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'todos', component: TodosComponent  },
    { path: 'user-info/:email', component: UserInfoComponent},
    {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}]
    },
    {path: '', component: LoginComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
    ])],
  declarations: [AppComponent, TodosComponent, DashboardComponent, HomeComponent, LoginComponent, RegisterComponent,
   UsersComponent, UserInfoComponent],
  providers: [ UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
