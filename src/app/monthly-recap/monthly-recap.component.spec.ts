import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRecapComponent } from './monthly-recap.component';

describe('MonthlyRecapComponent', () => {
  let component: MonthlyRecapComponent;
  let fixture: ComponentFixture<MonthlyRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
