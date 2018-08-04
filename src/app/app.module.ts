import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { TasksService } from './tasks.service';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksWaitingoComponent } from './tasks-waitingo/tasks-waitingo.component';
import { TasksResolvedComponent } from './tasks-resolved/tasks-resolved.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CadastroTaskComponent } from './cadastro-task/cadastro-task.component';
import { StatusTarefaPipe } from './status-tarefa.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksWaitingoComponent,
    TasksResolvedComponent,
    HomeComponent,
    CadastroTaskComponent,
    StatusTarefaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
