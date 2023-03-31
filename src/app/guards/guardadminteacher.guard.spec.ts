import { TestBed } from '@angular/core/testing';

import { GuardadminteacherGuard } from './guardadminteacher.guard';

describe('GuardadminteacherGuard', () => {
  let guard: GuardadminteacherGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardadminteacherGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
