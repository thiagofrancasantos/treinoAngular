import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToReport(): void {
    this.router.navigate(['/report']);
  }
}
