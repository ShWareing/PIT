import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyRecapComponent } from './weekly-recap.component';

describe('WeeklyRecapComponent', () => {
  let component: WeeklyRecapComponent;
  let fixture: ComponentFixture<WeeklyRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
