import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdetailsbuttontcomplaintComponent } from './showdetailsbuttontcomplaint.component';

describe('ShowdetailsbuttontcomplaintComponent', () => {
  let component: ShowdetailsbuttontcomplaintComponent;
  let fixture: ComponentFixture<ShowdetailsbuttontcomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdetailsbuttontcomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdetailsbuttontcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
