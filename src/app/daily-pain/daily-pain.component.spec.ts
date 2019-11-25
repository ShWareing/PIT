import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPainComponent } from './daily-pain.component';

describe('DailyPainComponent', () => {
  let component: DailyPainComponent;
  let fixture: ComponentFixture<DailyPainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
