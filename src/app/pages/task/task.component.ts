import { Component } from '@angular/core';
import { TaskLayoutComponent } from '../../components/task-layout/task-layout.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskLayoutComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {}
