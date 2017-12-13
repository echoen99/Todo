import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnoozeTimerComponent } from './snooze-timer.component';

describe('SnoozeTimerComponent', () => {
  let component: SnoozeTimerComponent;
  let fixture: ComponentFixture<SnoozeTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnoozeTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnoozeTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
