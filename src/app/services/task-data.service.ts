import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { AuthGuard } from './auth-guard.service';
import { LoginService } from './login.service';
import { AuthService } from './auth-service.service';
import { jwtDecode } from 'jwt-decode';
import { CreateTask } from '../components/new-task-template/new-task-template.component';

const headers = new HttpHeaders({
  Authorization: `1001 ${localStorage.getItem('token')}`,
});

@Injectable({
  providedIn: 'root',
})
export class TaskService implements OnInit {
  private url = 'http://localhost:3000/api/task';
  userId: string | null = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para obter o ID do usuário decodificando o token
  getUserId(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.id;
    }
    return null;
  }

  ngOnInit(): void {
    this.userId = this.getUserId();
    console.log('ID do usuário logado:', this.getUserId);
  }

  getTasks() {
    return this.http.get(`${this.url}/${this.getUserId()}`, {
      withCredentials: true,
      headers,
    });
  }

  createTask(user: CreateTask | FormGroup) {
    return this.http.post(`${this.url}/create/${this.getUserId()}`, user, {
      withCredentials: true,
      headers,
    });
  }
}
