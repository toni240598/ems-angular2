import { TestBed, inject } from '@angular/core/testing';

import { LoopbackService } from './loopback.service';

describe('LoopbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoopbackService]
    });
  });

  it('should ...', inject([LoopbackService], (service: LoopbackService) => {
    expect(service).toBeTruthy();
  }));
});
