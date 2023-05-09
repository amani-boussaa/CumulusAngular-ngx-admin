import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthlayoutamaniComponent } from './authlayoutamani.component';

describe('AuthlayoutamaniComponent', () => {
  let component: AuthlayoutamaniComponent;
  let fixture: ComponentFixture<AuthlayoutamaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthlayoutamaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthlayoutamaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
