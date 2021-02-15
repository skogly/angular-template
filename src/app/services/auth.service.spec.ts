import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let isAuthenticated: boolean;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });

    service = TestBed.inject(AuthService);
    service.isAuthenticated.subscribe((value) => {
      isAuthenticated = value;
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false', () => {
    service.authenticate('wrong_password');
    expect(isAuthenticated).toBeFalse();
  });

  it('should return true', () => {
    service.authenticate('root');
    expect(isAuthenticated).toBeTrue();
  });
});
