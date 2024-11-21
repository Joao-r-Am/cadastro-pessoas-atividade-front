import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, Observer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TaskService } from '../../services/task-data.service';

export interface CreateTask {
  nome: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  dataCriacao: string;
}

@Component({
  selector: 'app-new-task-template',
  standalone: true,
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  templateUrl: './new-task-template.component.html',

  styleUrls: ['./new-task-template.component.css'],
})
export class NewTaskTemplateComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  task!: CreateTask;
  validateForm: FormGroup;

  constructor(
    private fb: NonNullableFormBuilder,
    private taskService: TaskService
  ) {
    this.validateForm = this.fb.group({
      userId: taskService.getUserId(),
      nome: this.fb.control('', [Validators.required]),
      descricao: this.fb.control('', [Validators.required]),
      dataInicio: this.fb.control('', [Validators.required]),
      dataFim: this.fb.control('', [Validators.required]),
      dataCriacao: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm() {
    this.task = this.validateForm.value;
    console.log(this.task);
    return this.taskService
      .createTask(this.task)
      .subscribe({ next: () => this.resetForm() });
  }

  resetForm(): void {
    this.validateForm.reset();
  }
}
