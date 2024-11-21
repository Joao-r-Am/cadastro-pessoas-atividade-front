import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzGridModule,
  ],
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css'],
  providers: [LoginService],
})
export class LoginLayoutComponent {
  validateForm!: FormGroup;

  constructor(
    private fb: NonNullableFormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      remember: [true],
    });
  }

  async submitForm() {
    if (this.validateForm.valid) {
      const { email, senha } = this.validateForm.value;
      this.loginService.login(email, senha).subscribe({
        next: () => console.log('sucesso'),
        error: () => console.log('error'),
        complete: () => this.router.navigate(['/home']),
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
