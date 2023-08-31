import { TestBed } from '@angular/core/testing';

import { ExpireTokenService } from './expire-token.service';

describe('ExpireTokenService', () => {
  let service: ExpireTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpireTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
