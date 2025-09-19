import { TestBed } from '@angular/core/testing';

import { DataApiService } from './data-api';

describe('DataApiService', () => {
  let service: DataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
