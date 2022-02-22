import { TestBed } from '@angular/core/testing';

import { EnmployeesService } from './enmployees.service';

describe('EnmployeesService', () => {
  let service: EnmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
