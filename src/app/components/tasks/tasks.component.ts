import { Component ,OnInit} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks:Task[]= []
  
  constructor(private taskSrvice:TaskService){}

  ngOnInit(): void{
    this.taskSrvice.getTasks().subscribe((tasks)=> this.tasks = tasks);
  }

  deleteTask(task:Task){
    this.taskSrvice.deleteTask(task).subscribe(()=> (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder;
   this.taskSrvice.updateTaskReminder(task).subscribe();
    
  }

  addTask(task:Task){
    this.taskSrvice.addTask(task).subscribe((task)=> this.tasks.push(task));
    
  }
}
