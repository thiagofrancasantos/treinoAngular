import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
];
