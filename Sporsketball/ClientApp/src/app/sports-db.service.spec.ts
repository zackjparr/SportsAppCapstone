import { TestBed } from '@angular/core/testing';

import { SportsDBService } from './sports-db.service';

describe('SportsDBService', () => {
  let service: SportsDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
