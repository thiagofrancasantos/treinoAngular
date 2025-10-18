import { Component, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ConversorService } from './conversor.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'conversorDeMoedas';

  valor = signal(0);
  moedaDe = signal('BRL');
  moedaPara = signal('USD');
  resultado = signal<number | null>(null);

  moedas = ['USD', 'BRL', 'EUR', 'GBP', 'JPY'];

  constructor(private conversorService: ConversorService) {}

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valor.set(Number(target.value));
  }

  converter() {
    const v = this.valor();
    const de = this.moedaDe();
    const para = this.moedaPara();
    if (v && de && para) {
      this.conversorService.converter(v, de, para).subscribe(
        (response: any) => {
          this.resultado.set(response.rates[para]);
        },
        (error) => {
          console.error('Erro ao converter:', error);
          this.resultado.set(null);
        }
      );
    }
  }

  inverterMoedas() {
    const de = this.moedaDe();
    this.moedaDe.set(this.moedaPara());
    this.moedaPara.set(de);
    this.converter();
  }
}
