import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartamaniComponent } from './chartamani.component';

describe('ChartamaniComponent', () => {
  let component: ChartamaniComponent;
  let fixture: ComponentFixture<ChartamaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartamaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartamaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
