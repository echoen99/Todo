import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemSnoozeComponent } from './todo-item-snooze.component';

describe('TodoItemSnoozeComponent', () => {
  let component: TodoItemSnoozeComponent;
  let fixture: ComponentFixture<TodoItemSnoozeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemSnoozeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemSnoozeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
