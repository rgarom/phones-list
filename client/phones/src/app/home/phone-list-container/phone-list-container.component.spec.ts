import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PhoneListContainerComponent } from './phone-list-container.component';
import { PhoneDetailComponent } from './../phone-detail/phone-detail.component';
import { SpinnerComponent } from './../../spinner/spinner.component';
import { phonesReducer } from './../../reducers/phones.reducer';
import { PhoneService } from './../../services/phone.service';
import { Phone } from './../../services/phone.interfaces';
import 'rxjs/add/observable/of';

describe('PhoneListContainerComponent', () => {
  let component: PhoneListContainerComponent;
  let fixture: ComponentFixture<PhoneListContainerComponent>;

  const mockResponse: Phone[] = [
    {
      id: 1,
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
        PhoneListContainerComponent,
        PhoneDetailComponent,
        SpinnerComponent
      ],
      imports: [
        StoreModule.provideStore({ phones: phonesReducer })
      ],
      providers: [
        { provide: PhoneService, useClass: PhoneServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should save phones to global store on init', () => {
    component.ngOnInit();

    component.phones$.subscribe((phones) => {
      expect(phones.length).toBe(1);
      expect(phones[0].title).toEqual('iPhone 7');
    });
  });
});
