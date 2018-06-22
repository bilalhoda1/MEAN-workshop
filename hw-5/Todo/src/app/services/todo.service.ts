import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Todos } from '../models/add';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<{todo: Todo[]}>('http://localhost:3000/todo')
    .pipe(
      map((response) => {
        return response.todo;
      })
    );
  }

  addTodo(todo: Todos) {
    return this.http.post<{todo: Todos}>('http://localhost:3000/todo', {
      todo: todo
    })
    .pipe(
      map((response) => {
        return response.todo;
      })
    );
  }
  deleteTodo(todo: Todo) {
    console.log(todo._id);
    console.log('Hello');
    return this.http.delete<{todo: Todo}>('http://localhost:3000/todo'+'/'+todo._id)
    .pipe(
      map((response) => {
        return response.todo;
      })
    );
   }
   updateTodo(todo: Todo) {

    console.log(todo._id);
    console.log('Hello');
    return this.http.put<{todo: Todo}>('http://localhost:3000/todo'+'/'+todo._id,todo)
    .pipe(
      map((response) => {
        return response.todo;
      })
    );
   }

}
