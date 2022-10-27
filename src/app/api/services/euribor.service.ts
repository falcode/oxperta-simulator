import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AllEuribors } from './models/euribor.model';

@Injectable({
  providedIn: 'root',
})
export class EuriborService {

  constructor(private http: HttpClient) {
  }

  getEuribor() {
    return this.http.get<AllEuribors>(`${environment.euribor}`);
  }

  async setEuribor(): Promise<number> {
    const source$ = this.getEuribor().pipe(first(), map(euribor => euribor.non_central_bank_rates.find(euribor => euribor.name === 'Euribor - 12 months').rate_pct.toString()));
    const euribor = await firstValueFrom(source$);
    return +euribor;
  }
}
