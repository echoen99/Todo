import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.css']
})
export class ItemEditorComponent implements OnInit {

  todo: Todo = new Todo();
  @Input() onEdit: boolean;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  @Input() startEdit(todo: Todo): void {
    this.todo = todo;
    this.onEdit = true;
  }

  @Input() closeEdit(): void {
    this.onEdit = false;
  }

}
