import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsButtonComponentComponent } from './show-details-button-component.component';

describe('ShowDetailsButtonComponentComponent', () => {
  let component: ShowDetailsButtonComponentComponent;
  let fixture: ComponentFixture<ShowDetailsButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailsButtonComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailsButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
