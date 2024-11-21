import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzLayoutModule, NzIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private location: Location) {}

  // método para retornar uma pagina
  goBack(): void {
    this.location.back();
  }

  // método de logout
  logout(): void {
    localStorage.removeItem('token');
    console.log('Usuário deslogado');
    window.location.href = '/login';
  }
}
