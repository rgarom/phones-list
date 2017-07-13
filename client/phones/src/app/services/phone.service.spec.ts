import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { PhoneService } from './phone.service';

describe('PhoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PhoneService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([PhoneService], (service: PhoneService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<Phone[]>',
    inject([PhoneService, XHRBackend], (service: PhoneService, mockBackend: MockBackend) => {

      const mockResponse = [
        { id: 1, title: 'iPhone 7' },
        { id: 2, title: 'Samsung Galaxy S8' }
      ];

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      service.getPhones().subscribe((phones) => {
        expect(phones.length).toBe(2);
        expect(phones[0].title).toEqual('iPhone 7');
        expect(phones[1].title).toEqual('Samsung Galaxy S8');
      });
    }));
});
