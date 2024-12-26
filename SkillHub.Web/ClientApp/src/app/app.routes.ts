import { Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/pages/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./core/auth/pages/login/login.component').then(c => c.LoginComponent)
      }
    ]
  }
];
