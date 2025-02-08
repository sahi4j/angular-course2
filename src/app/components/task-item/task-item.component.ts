import {Task} from '../../Task'

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Output() onDeleteTask:EventEmitter<Task>= new EventEmitter();
  @Output() onDblClickEvent:EventEmitter<Task>= new EventEmitter();
  @Input() task:Task;
  closeButton = faTimes;

  ngOnInit(): void {
    
  }
  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

  onDblClick(task:Task){
    
    this.onDblClickEvent.emit(task);
  }
}
