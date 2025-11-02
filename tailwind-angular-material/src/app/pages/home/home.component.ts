import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  searchTerm: string = '';

  data = [
    {
      name: 'Alice',
      costE: 10,
      date: '10/11/2025',
      orderText: 'Order 001',
      purchaseDoc: 'Doc A',
    },
    {
      name: 'Bruno',
      costE: 11,
      date: '11/11/2025',
      orderText: 'Order 002',
      purchaseDoc: 'Doc B',
    },
    {
      name: 'Carlos',
      costE: 12,
      date: '12/11/2025',
      orderText: 'Order 003',
      purchaseDoc: 'Doc C',
    },
    {
      name: 'Diana',
      costE: 13,
      date: '13/11/2025',
      orderText: 'Order 004',
      purchaseDoc: 'Doc D',
    },
    {
      name: 'Eliza',
      costE: 14,
      date: '14/11/2025',
      orderText: 'Order 005',
      purchaseDoc: 'Doc E',
    },
    {
      name: 'Fabio',
      costE: 15,
      date: '15/11/2025',
      orderText: 'Order 006',
      purchaseDoc: 'Doc F',
    },
    {
      name: 'gaby',
      costE: 16,
      date: '16/11/2025',
      orderText: 'Order 007',
      purchaseDoc: 'Doc G',
    },
  ];
}
