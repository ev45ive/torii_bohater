import { TestBed, inject } from '@angular/core/testing';

import { AlldataService } from './alldata.service';

describe('AlldataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlldataService]
    });
  });

  it('should be created', inject([AlldataService], (service: AlldataService) => {
    expect(service).toBeTruthy();
  }));
});
