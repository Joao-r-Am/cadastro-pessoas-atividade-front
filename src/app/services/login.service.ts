import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-response';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, senha: string) {
    return this.http
      .post<LoginResponse>('http://localhost:3000/api/login', {
        email,
        senha,
      })
      .pipe(
        tap((value) => {
          localStorage.setItem('token', value.token);
        })
      );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserId(): string | null {
    const token = localStorage.getItem('token');
    console.log('aqui', token);
    if (token) {
      const decodedToken: any = jwtDecode(token); // decodifica o token
      return decodedToken.userId;
    }
    return null;
  }
}
