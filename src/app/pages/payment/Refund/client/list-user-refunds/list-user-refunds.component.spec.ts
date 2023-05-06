import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserRefundsComponent } from './list-user-refunds.component';

describe('ListUserRefundsComponent', () => {
  let component: ListUserRefundsComponent;
  let fixture: ComponentFixture<ListUserRefundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserRefundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserRefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
