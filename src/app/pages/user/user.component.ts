import { Component } from '@angular/core';
import { UserLayoutComponent } from '../../components/user-layout/user-layout.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserLayoutComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {}
