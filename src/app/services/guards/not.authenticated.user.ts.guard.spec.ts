import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notAuthenticatedUserTsGuard } from './not.authenticated.user.guard';

describe('notAuthenticatedUserTsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      notAuthenticatedUserTsGuard(...guardParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
