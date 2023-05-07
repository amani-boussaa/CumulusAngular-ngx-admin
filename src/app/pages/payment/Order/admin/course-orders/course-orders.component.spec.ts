import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOrdersComponent } from './course-orders.component';

describe('CourseOrdersComponent', () => {
  let component: CourseOrdersComponent;
  let fixture: ComponentFixture<CourseOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
