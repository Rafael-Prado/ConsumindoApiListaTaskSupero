import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ITask } from '../../Model/ITask';

@Component({
  selector: 'app-tasks-resolved',
  templateUrl: './tasks-resolved.component.html',
  styleUrls: ['./tasks-resolved.component.css']
})
export class TasksResolvedComponent implements OnInit {
    private situacao: number = 2
    public ListTask: ITask[] ;

    constructor(
      public taskService: TasksService
    ) { }

    ngOnInit() {
      this.getTaskSituacao();
    }

    getTaskSituacao() {
      this.taskService.getListaTaskSituacao(this.situacao)
      .subscribe( result => {
        this.ListTask = result;
      }, error => {
        console.log(error);
      });
    }

}
