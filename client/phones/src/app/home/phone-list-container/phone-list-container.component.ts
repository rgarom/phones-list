import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UPDATE } from '../../reducers/phones.reducer';
import { Phone } from './../../services/phone.interfaces';
import { PhoneService } from './../../services/phone.service';

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.css']
})
export class PhoneListContainerComponent implements OnInit {
  phones$: Observable<Phone[]>;

  constructor(
    private store: Store<Phone[]>,
    private phoneService: PhoneService
  ) {
    this.phones$ = this.store.select('phones');
  }

  ngOnInit() {
    this.phoneService.getPhones().subscribe((phones: Phone[]) => {
      this.store.dispatch({
        type: UPDATE,
        payload: phones
      });
    });
  }
}
