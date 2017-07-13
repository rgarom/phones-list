import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDetailComponent } from './phone-detail.component';

describe('PhoneDetailComponent', () => {
  let component: PhoneDetailComponent;
  let fixture: ComponentFixture<PhoneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDetailComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should accept phone data as an input', () => {
    component.data = {
      id: 1,
      title: 'iPhone 7',
      desc: 'Best Apple mobile phone ever',
      image: 'https://tienda.yoigo.com/pictures/14556/apple-iphone-7-oro-front.jpg',
      color: 'gold',
      price: 739
    };

    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h2').textContent).toContain('iPhone 7');
  });
});
