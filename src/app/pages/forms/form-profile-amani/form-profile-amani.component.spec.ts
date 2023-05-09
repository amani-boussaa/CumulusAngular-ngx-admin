import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileAmaniComponent } from './form-profile-amani.component';

describe('FormProfileAmaniComponent', () => {
  let component: FormProfileAmaniComponent;
  let fixture: ComponentFixture<FormProfileAmaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfileAmaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProfileAmaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
