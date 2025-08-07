import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { guardMatchGuard } from './guard-match-guard';

describe('guardMatchGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardMatchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
