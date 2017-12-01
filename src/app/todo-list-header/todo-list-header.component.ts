import { Todo } from './../todo';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  newTodo: Todo = new Todo();
  editedTodo: Todo;

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  @Output()
  submit: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

  editTodo(todo: Todo) {
    // this.edit.emit(this.newTodo);
    this.editedTodo = todo;
  }

  submitTodo() {
    this.submit.emit(this.editedTodo);
    this.editedTodo = null;
  }

  ngOnInit() {
  }

}
