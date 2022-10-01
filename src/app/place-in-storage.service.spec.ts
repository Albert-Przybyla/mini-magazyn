import { TestBed } from '@angular/core/testing';

import { PlaceInStorageService } from './place-in-storage.service';

describe('PlaceInStorageService', () => {
  let service: PlaceInStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceInStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
