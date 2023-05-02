import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableamanicomplaintComponent } from './tableamanicomplaint.component';

describe('TableamanicomplaintComponent', () => {
  let component: TableamanicomplaintComponent;
  let fixture: ComponentFixture<TableamanicomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableamanicomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableamanicomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
