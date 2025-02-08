import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Task} from '../Task'
import {Observable} from 'rxjs'

const httpOptions ={
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private apiUrl:string='http://localhost:5000/api/tasks';
 
  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task:Task):Observable<Task>{
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`);
  }

  toggleReminder(task:Task):Observable<Task>{
     return this.http.put<Task>(`${this.apiUrl}/${task.id}`,{id:1,day:task.day,text:task.text,reminder:!task.reminder},httpOptions);
  }

  createTask(task:Task):Observable<Task>{
    console.log("creation de la tache");
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }
}
