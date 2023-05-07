import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBlogComponent } from './the-blog.component';

describe('TheBlogComponent', () => {
  let component: TheBlogComponent;
  let fixture: ComponentFixture<TheBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
