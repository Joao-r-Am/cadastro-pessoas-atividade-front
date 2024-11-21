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
import { CreateUser, UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user-template',
  standalone: true,
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  templateUrl: './new-user-template.component.html',

  styleUrls: ['./new-user-template.component.css'],
})
export class NewUserTemplateComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  user!: CreateUser;
  validateForm: FormGroup;

  constructor(
    private fb: NonNullableFormBuilder,
    private userService: UserDataService,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      senha: this.fb.control('', [Validators.required]),
      telefone: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.email, Validators.required]),
      rua: this.fb.control('', [Validators.required]),
      numero: this.fb.control('', [Validators.required]),
      complemento: this.fb.control('', [Validators.required]),
      cidade: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  resetForm() {
    return this.validateForm.reset();
  }

  submitForm() {
    this.user = this.validateForm.value;
    console.log(this.user);
    return this.userService
      .createUser(this.user)
      .subscribe({
        next: () => this.resetForm(),
        complete: () => this.router.navigate(['/task']),
      });
  }
}
