import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserOrdersComponent } from './user-orders.component';

describe('ListOrdersComponent', () => {
  let component: ListUserOrdersComponent;
  let fixture: ComponentFixture<ListUserOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
