import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './home/phone-list-container/phone-list-container.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { phonesReducer } from './reducers/phones.reducer';
import { PhoneService } from './services/phone.service';
import { Phone } from './services/phone.interfaces';
import 'rxjs/add/observable/of';


describe('AppComponent', () => {
  const mockResponse: Phone[] = [
    {
      id: 2,
      title: 'iPhone 7',
      desc: 'Best Apple mobile phone ever',
      image: 'https://tienda.yoigo.com/pictures/14556/apple-iphone-7-oro-front.jpg',
      color: 'gold',
      price: 739
    }
  ];

  class PhoneServiceMock {
    getPhones(): Observable<Phone[]> { return Observable.of(mockResponse); }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PhoneListContainerComponent,
        SpinnerComponent
      ],
      imports: [
        StoreModule.provideStore({ phones: phonesReducer })
      ],
      providers: [
        { provide: PhoneService, useClass: PhoneServiceMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render app-phone-list-container component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-phone-list-container').textContent).toContain('Mobile Phones list');
  }));
});
