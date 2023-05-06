import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRefundsComponent } from './list-refunds.component';

describe('ListRefundsComponent', () => {
  let component: ListRefundsComponent;
  let fixture: ComponentFixture<ListRefundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRefundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
