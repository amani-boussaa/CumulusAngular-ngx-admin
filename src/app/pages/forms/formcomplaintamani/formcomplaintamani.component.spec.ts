import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcomplaintamaniComponent } from './formcomplaintamani.component';

describe('FormcomplaintamaniComponent', () => {
  let component: FormcomplaintamaniComponent;
  let fixture: ComponentFixture<FormcomplaintamaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcomplaintamaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcomplaintamaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
