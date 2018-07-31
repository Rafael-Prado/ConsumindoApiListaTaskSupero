import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksResolvedComponent } from './tasks-resolved.component';

describe('TasksResolvedComponent', () => {
  let component: TasksResolvedComponent;
  let fixture: ComponentFixture<TasksResolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksResolvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
