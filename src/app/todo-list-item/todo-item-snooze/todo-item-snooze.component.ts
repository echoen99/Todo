import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-todo-item-snooze',
  templateUrl: './todo-item-snooze.component.html',
  styleUrls: ['./todo-item-snooze.component.css']
})
export class TodoItemSnoozeComponent implements OnInit {

  snoozeLeft: number;

  constructor() { }

  ngOnInit() {
  }

}
