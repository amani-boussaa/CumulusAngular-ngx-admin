import { TestBed } from '@angular/core/testing';

import { GuardstudentGuard } from './guardstudent.guard';

describe('GuardstudentGuard', () => {
  let guard: GuardstudentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardstudentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
