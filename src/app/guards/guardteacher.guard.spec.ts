import { TestBed } from '@angular/core/testing';

import { GuardteacherGuard } from './guardteacher.guard';

describe('GuardteacherGuard', () => {
  let guard: GuardteacherGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardteacherGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
