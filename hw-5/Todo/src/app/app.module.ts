import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoService } from './services/todo.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthGuard } from './guards/auth.guard';
import { MatFormFieldModule, MatSnackBarModule, MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { DialogComponent } from './home/dialog/dialog.component';

@NgModule({
  imports: [ BrowserAnimationsModule, MatFormFieldModule, MatButtonModule,
    MatCheckboxModule, MatInputModule, MatSnackBarModule, MatToolbarModule,
    BrowserModule, FormsModule, ReactiveFormsModule, MatDialogModule,
    MatDividerModule, MatCardModule, HttpClientModule, RouterModule.forRoot([
    {path: 'register', component: RegisterComponent},
    { path: 'home',  component: HomeComponent,
    children: [
      { path: 'users', component: UsersComponent},
    { path: 'dashboard',
    component: DashboardComponent },
    { path: 'todos', component: TodosComponent  },
    { path: 'user-info/:email', component: UserInfoComponent},
    {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}]
    },
    {path: '', component: LoginComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
    ])],
  declarations: [AppComponent, TodosComponent, DashboardComponent, HomeComponent, LoginComponent, RegisterComponent,
   UsersComponent, UserInfoComponent, DialogComponent],
  providers: [ UsersService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
 ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
