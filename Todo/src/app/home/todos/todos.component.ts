import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  placeholderVal = 'Enter task';
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        text: 'Pickup kids at school'
      },
      {
        text: 'Meeting with Boss'
         },
      {
        text: 'Dinner with wife'
      }
    ];
  }
  addTodo() {
    if (this.text !== ' ' ) {
    this.todos.push({
      text: this.text
    });
    this.clearSearch();
   }
  }
  deleteTodo(todoText) {
   for ( let i = 0; i < this.todos.length; i++) {
      if ( this.todos[i].text === todoText) {
          this.todos.splice(i, 1);
        }
   }
  }
  clearSearch() {
    this.text = ' ';
  }
}
