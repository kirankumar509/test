import { TestBed } from '@angular/core/testing';

import { RiderserviceService } from './riderservice.service';

describe('RiderserviceService', () => {
  let service: RiderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
