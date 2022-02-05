import { TestBed } from '@angular/core/testing';

import { SportsBoardService } from './sports-board.service';

describe('SportsBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportsBoardService = TestBed.get(SportsBoardService);
    expect(service).toBeTruthy();
  });
});
