import { HomeComponent } from './home/home.component';
import { TasksResolvedComponent } from './tasks-resolved/tasks-resolved.component';
import { TasksWaitingoComponent } from './tasks-waitingo/tasks-waitingo.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasksResolved', component: TasksResolvedComponent },
  { path: 'tasksWaitingo', component: TasksWaitingoComponent }
  ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
