import { Component ,Output,EventEmitter} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription} from 'rxjs'
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTasks: EventEmitter<Task>=new EventEmitter()
   textvalue!: string;
   day!: string;
   reminder: boolean = false;
showAddTask!:boolean
subscription: Subscription

   constructor(private uiService: UiService){
    this.subscription= this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value))
   }

   onSubmit(){
    if(!this.textvalue){
      alert('Please Add Task')
      return;
    }
    const newTask = {
      text:this.textvalue,
      day:this.day,
      reminder:this.reminder
    }

    this.onAddTasks.emit(newTask)

     this.textvalue ='';
     this.day = '';
     this.reminder = false
   }
}
