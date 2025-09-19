import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardChartComponent } from './scorecard-chart';

describe('ScorecardChartComponent', () => {
  let component: ScorecardChartComponent;
  let fixture: ComponentFixture<ScorecardChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScorecardChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorecardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
