import { TasksService } from './../tasks.service';
import { ITask } from './../../Model/ITask';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-task',
  templateUrl: './cadastro-task.component.html',
  styleUrls: ['./cadastro-task.component.css']
})
export class CadastroTaskComponent implements OnInit {
  public formulario: FormGroup;
  public task: ITask[];
  public sucesso: Boolean;
  public flag: any;

  constructor
  (
    private fb: FormBuilder,
    private TaskService: TasksService,
  ) {}

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.fb.group({
      titulo: ['', [
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required]],
      situacao: ['', [
        Validators.required
      ]],
      tarefa: ['', [
        Validators.minLength(20),
        Validators.maxLength(300),
        Validators.required]],
    });
  }

  onSubmit() {
    this.TaskService.salvarTask(this.formulario.value)
    .subscribe(result => {
    this.sucesso = result.success;  
    this.formulario.reset();
    });
  }


}
