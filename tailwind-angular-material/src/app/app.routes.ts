import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
