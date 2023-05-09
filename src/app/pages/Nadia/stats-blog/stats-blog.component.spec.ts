import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBlogComponent } from './stats-blog.component';

describe('StatsBlogComponent', () => {
  let component: StatsBlogComponent;
  let fixture: ComponentFixture<StatsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
