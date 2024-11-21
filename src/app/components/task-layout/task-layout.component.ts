import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NewUserTemplateComponent } from '../new-user-template/new-user-template.component';
import { NewTaskTemplateComponent } from '../new-task-template/new-task-template.component';
import { AuthGuard } from '../../services/auth-guard.service';
import { TaskService } from '../../services/task-data.service';

@Component({
  selector: 'app-task-layout',
  standalone: true,
  imports: [
    NzDividerModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NewTaskTemplateComponent,
  ],
  templateUrl: './task-layout.component.html',
  styleUrl: './task-layout.component.css',
})
export class TaskLayoutComponent implements OnInit {
  isVisible = false;
  listOfData: any;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (response) => {
        this.listOfData = response;
        console.log('Dados recebidos:', this.listOfData);
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
