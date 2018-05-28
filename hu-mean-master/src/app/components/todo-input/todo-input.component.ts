import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ta-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  placholderVal = 'Enter text';
  newTodoVal = '';
  searchValue;
  @Output() todoAdded = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  clearSearch() {
    this.newTodoVal = ' ';
  }
  addTodo() {
    console.log(this.newTodoVal);
    this.todoAdded.emit(this.newTodoVal);
    this.clearSearch();
  }

}
