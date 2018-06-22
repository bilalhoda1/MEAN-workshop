import { Component, OnInit } from '@angular/core';
import { Todos } from '../../models/add';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = 'Todo App';
  todoList: Todos[] = [];
  placeholderVal = '';
  text = '';
  dialogRef: MatDialogRef<DialogComponent>;

  constructor(private todoService: TodoService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe((todos) => {
        this.todoList = todos;
      });
  }
  addNewTodo(newTodoText) {
    const newTodo = {
      name: newTodoText,
      completed: false,
    };
    this.todoService.addTodo(newTodo)
      .subscribe((todo: Todos) => {
        this.todoList.push(todo);
        this.openSnackbar('Todo', 'added');
      });
    this.clearSearch();
     }
   deleteTodo(todo) {
    this.todoService.deleteTodo(todo)
      .subscribe((todos => {
        for ( let i = 0; i < this.todoList.length; i++) {
          if ( this.todoList[i].name === todo.name) {
              this.todoList.splice(i, 1);
             }
        }
        this.openSnackbar('Todo', 'deleted');
      }));
  }
  updateTodo(event, todo) {
    if (event.target.checked) {
       todo.completed = true;
       console.log(todo.completed);
    } else {
     todo.completed = false;
    }

    this.todoService.updateTodo(todo)
      .subscribe((todos => {
        for ( let i = 0; i < this.todoList.length; i++) {
          if ( this.todoList[i].name === todo.name) {
              this.todoList[i].completed = true;
             }
        }
        this.openSnackbar('Todo', 'updated');
      }));
  }
  openSnackbar(message: string , action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  openConfirmationDialog(todo) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
      this.deleteTodo(todo);
      }
      this.dialogRef = null;
    });
  }
  clearSearch() {
    this.text = ' ';
   }
}
