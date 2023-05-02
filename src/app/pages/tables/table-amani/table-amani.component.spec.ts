import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAmaniComponent } from './table-amani.component';

describe('TableAmaniComponent', () => {
  let component: TableAmaniComponent;
  let fixture: ComponentFixture<TableAmaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAmaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAmaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
