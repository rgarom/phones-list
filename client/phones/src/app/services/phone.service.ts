import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_URL, phones } from './api-route.const';
import { Phone } from './phone.interfaces';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {

  constructor(private http: Http) { }

  getPhones(): Observable<Phone[]> {
    return this.http
      .get(API_URL + phones)
      .map(res => res.json());
  }
}
