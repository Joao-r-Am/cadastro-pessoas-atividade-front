import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authenticatedUserTsGuard } from './authenticated.user.guard';

describe('authenticatedUserTsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      authenticatedUserTsGuard(...guardParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
