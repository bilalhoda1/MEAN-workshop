import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './home/todos/todos.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent,
    children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'todos', component: TodosComponent  },
    {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}]
    },
    {path: '', component: LoginComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
    ])],
  declarations: [AppComponent, TodosComponent, DashboardComponent, HomeComponent, LoginComponent, RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
