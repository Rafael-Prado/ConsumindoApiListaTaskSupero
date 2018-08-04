import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { ITask } from '../Model/ITask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

   public url = 'http://localhost:21069/task/api';

  constructor(
    private http: Http
  ) { }

 getListaTask() {
  return this.http.get(this.url)
  .pipe(map(res => res.json()));
 }

salvarTask(data: any) {    
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
     return this.http.post(this.url,data, options)
     .pipe(map(res => res.json()))
 }

 getListaTaskSituacao(situacao: number) {
  let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  let options = new RequestOptions({ headers: headers});

  return this.http.get(this.url + "/situacao/" + situacao, options)
  .pipe(map(res => res.json()));
 }

 
}
