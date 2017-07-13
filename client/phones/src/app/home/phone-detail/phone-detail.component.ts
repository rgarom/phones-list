import { Component, OnInit, Input } from '@angular/core';

import { Phone } from './../../services/phone.interfaces';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent {
  @Input() data: Phone;
}
