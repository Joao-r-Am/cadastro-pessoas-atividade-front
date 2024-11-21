import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs';

export interface CreateUser {
  nome: string;
  senha: string;
  telefone: string;
  email: string;
  rua: string;
  numero: number;
  complemento: string;
  cidade: string;
}

const headers = new HttpHeaders({
  Authorization: `1001 ${localStorage.getItem('token')}`,
});

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private url = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url, { withCredentials: true, headers });
  }

  createUser(user: CreateUser | FormGroup) {
    return this.http.post(`${this.url}/create`, user, {
      withCredentials: true,
      headers,
    });
  }
}
