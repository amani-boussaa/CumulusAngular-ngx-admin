import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailuserAmaniComponent } from './form-detailuser-amani.component';

describe('FormDetailuserAmaniComponent', () => {
  let component: FormDetailuserAmaniComponent;
  let fixture: ComponentFixture<FormDetailuserAmaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDetailuserAmaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDetailuserAmaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
