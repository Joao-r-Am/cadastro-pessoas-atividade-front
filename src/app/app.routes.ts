import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserComponent } from './pages/user/user.component';
import { TaskComponent } from './pages/task/task.component';
import { NotAuthenticatedUser } from './services/guards/not.authenticated.user.guard';
import { AuthenticatedUser } from './services/guards/authenticated.user.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthenticatedUser],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard, AuthenticatedUser],
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard, AuthenticatedUser],
  },
  {
    path: 'task',
    component: TaskComponent,
    canActivate: [AuthGuard, AuthenticatedUser],
  },
];
