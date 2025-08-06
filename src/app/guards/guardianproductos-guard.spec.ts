import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardianproductosGuard } from './guardianproductos-guard';

describe('guardianproductosGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardianproductosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
