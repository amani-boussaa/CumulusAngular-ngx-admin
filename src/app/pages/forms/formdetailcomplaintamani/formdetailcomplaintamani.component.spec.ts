import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdetailcomplaintamaniComponent } from './formdetailcomplaintamani.component';

describe('FormdetailcomplaintamaniComponent', () => {
  let component: FormdetailcomplaintamaniComponent;
  let fixture: ComponentFixture<FormdetailcomplaintamaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdetailcomplaintamaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdetailcomplaintamaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
