import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NewUserTemplateComponent } from '../new-user-template/new-user-template.component';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../../services/user-data.service';

interface User {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  rua: string;
  numero: number;
  complemento: string;
  cidade: string;
}

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [
    NzDividerModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NewUserTemplateComponent,
  ],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css',
})
export class UserLayoutComponent implements OnInit {
  isVisible = false;
  listOfData: any;

  constructor(private userService: UserDataService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(
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
