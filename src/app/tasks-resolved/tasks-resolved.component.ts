import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ITask } from '../../Model/ITask';

@Component({
  selector: 'app-tasks-resolved',
  templateUrl: './tasks-resolved.component.html',
  styleUrls: ['./tasks-resolved.component.css']
})
export class TasksResolvedComponent implements OnInit {

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
