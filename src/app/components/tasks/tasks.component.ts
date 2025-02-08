import {Task} from '../../Task'
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  tasks: Task[]=[];

  constructor(private taskService : TaskServiceService){
  }
  
  ngOnInit(): void {
    this.refreshTaskList();
  }

  ngOnDestroy(): void {
    
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(
      ()=>this.tasks=this.tasks.filter((candidate)=>candidate.id != task.id)
    );
  }
  
  toggleReminder(task:Task){
    this.taskService.toggleReminder(task).subscribe();
    this.refreshTaskList();
  }

  private refreshTaskList():void{
    this.taskService.getTasks().subscribe((tasklist)=>this.tasks=tasklist);
  }

  doCreateTask(task:Task){
    this.taskService.createTask(task).subscribe((taskc)=>console.log(`Task created : ${taskc.id}`));
    this.refreshTaskList();
  }
}
