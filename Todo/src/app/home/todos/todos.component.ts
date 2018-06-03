import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text = ' ';
  tasks;
  placeholderVal = 'Enter task';
  val: string;
  obj: string;
  constructor() { }

  ngOnInit() {
    this.tasks = [
      {
        text: 'Do homework'
      },
      {
        text: 'Meeting with Boss'
         },
      {
        text: 'Dinner with family'
      }
    ];
    this.obj = localStorage.getItem('tasks');
    this.todos = JSON.parse(this.obj);
  }
  addTodo() {
    if (this.text !== ' ') {
    this.tasks.push({
      text: this.text
    });
    this.val = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', this.val);
    this.obj = localStorage.getItem('tasks');
    this.todos = JSON.parse(this.obj);
    this.clearSearch();
   }
  }
  deleteTodo(todoText) {
   for ( let i = 0; i < this.tasks.length; i++) {
      if ( this.tasks[i].text === todoText) {
          this.tasks.splice(i, 1);
        }
   }
   this.val = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', this.val);
    this.obj = localStorage.getItem('tasks');
    this.todos = JSON.parse(this.obj);
  }
  clearSearch() {
    this.text = ' ';
  }
}
