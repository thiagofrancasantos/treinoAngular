import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  bounceStates: boolean[] = [false, false, false, false];

  ngOnInit() {
    let i = 0;
    setInterval(() => {
      if (i < 4) {
        this.bounceStates[i] = !this.bounceStates[i];
        i++;
      }
    }, 500);
  }

  getBounceClass(index: number): string {
    return this.bounceStates[index] ? 'bounce' : '';
  }
}
