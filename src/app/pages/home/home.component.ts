import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { HomeLayoutComponent } from '../../components/home-layout/home-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzDividerModule, HomeLayoutComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
