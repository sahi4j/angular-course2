import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Task} from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  text:string;
  day:string;
  reminder:boolean=false;
  @Output() createTask:EventEmitter<Task>= new EventEmitter();

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.text){
      alert("please add a text");
    }  
    
    this.createTask.emit({
      text:this.text,
      day:this.day,
      reminder:this.reminder
    })
    this.text="";
    this.day="";
    this.reminder=false;
  }

  
}
