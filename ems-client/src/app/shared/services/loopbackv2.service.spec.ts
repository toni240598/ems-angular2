import { TestBed, inject } from '@angular/core/testing';

import { Loopbackv2Service } from './loopbackv2.service';

describe('Loopbackv2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Loopbackv2Service]
    });
  });

  it('should be created', inject([Loopbackv2Service], (service: Loopbackv2Service) => {
    expect(service).toBeTruthy();
  }));
});
