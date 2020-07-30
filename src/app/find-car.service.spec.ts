import { TestBed } from '@angular/core/testing';

import { FindCarService } from './find-car.service';

describe('FindCarService', () => {
  let service: FindCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
