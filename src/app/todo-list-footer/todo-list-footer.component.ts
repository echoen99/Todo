import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  todos: Todo[];

  constructor() {
  }

  @Input() get countOfCompletedItems(): number {
    const completed = this.todos.filter((t) => t.complete === true).length;
    return completed;
  }

}
