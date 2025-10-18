import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConversorService {
  private apiUrl = 'https://api.frankfurter.app/latest';

  constructor(private http: HttpClient) {}

  converter(valor: number, de: string, para: string): Observable<any> {
    const url = `${this.apiUrl}?amount=${valor}&from=${de}&to=${para}`;
    return this.http.get(url);
  }
}
