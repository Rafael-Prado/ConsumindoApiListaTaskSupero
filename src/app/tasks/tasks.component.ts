import { Component, OnInit } from '@angular/core';
import { ITask } from '../../Model/ITask';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public ListTask: ITask[] ;

  constructor(
    public taskService: TasksService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getListaTask()
    .subscribe( result => {
      this.ListTask = result;
    }, error => {
      console.log(error);
    });
  }

}
