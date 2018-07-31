import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksWaitingoComponent } from './tasks-waitingo.component';

describe('TasksWaitingoComponent', () => {
  let component: TasksWaitingoComponent;
  let fixture: ComponentFixture<TasksWaitingoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksWaitingoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksWaitingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
