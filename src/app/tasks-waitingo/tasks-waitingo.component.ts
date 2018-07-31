import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ITask } from '../../Model/ITask';

@Component({
  selector: 'app-tasks-waitingo',
  templateUrl: './tasks-waitingo.component.html',
  styleUrls: ['./tasks-waitingo.component.css']
})
export class TasksWaitingoComponent implements OnInit {

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
