import { TestBed } from '@angular/core/testing';

import { DistanceApiService } from './distance-api.service';

describe('DistanceApiService', () => {
  let service: DistanceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistanceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
