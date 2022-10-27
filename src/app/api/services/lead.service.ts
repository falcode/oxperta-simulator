import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {environment} from '../../../environments/environment';
import { Euribor } from './models/euribor.model';

@Injectable({
  providedIn: 'root',
})
export class LeadService {

  constructor(private http: HttpClient) {
  }

  postLead() {
    return this.http.post<Euribor>(`${environment.lead}`, {});
  }
}
