import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { ITask } from '../Model/ITask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

   public url = 'http://5b60a857bde36b00140812b3.mockapi.io/supero/super';

  constructor(
    private http: Http
  ) { }

 getListaTask() {
  return this.http.get(this.url)
  .pipe(map(res => res.json()));
 }

salvarTask(data: ITask) {
  return this.http.get(this.url)
  .pipe(map(res => res.json()));
 }

}
