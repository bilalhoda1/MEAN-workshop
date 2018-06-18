import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = 'Todo App';
  todoList: Todo[] = [];
  placeholderVal = '';
  text = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe((todos) => {
        this.todoList = todos;
      });
  }
  addNewTodo(newTodoText) {
    const newTodo = {
      name: newTodoText,
      completed: false
    };
    this.todoService.addTodo(newTodo)
      .subscribe((todo: Todo) => {
        this.todoList.push(todo);
      });
    this.clearSearch();
     }
 // deleteTodo(todoText) {
   // for ( let i = 0; i < this.tasks.length; i++) {
     // if ( this.tasks[i].text === todoText) {
       //   this.tasks.splice(i, 1);
        // }
   // }
   // this.val = JSON.stringify(this.tasks);
    // localStorage.setItem('tasks', this.val);
    // this.obj = localStorage.getItem('tasks');
   // this.todos = JSON.parse(this.obj);
 // }
  clearSearch() {
    this.text = ' ';
   }
}
