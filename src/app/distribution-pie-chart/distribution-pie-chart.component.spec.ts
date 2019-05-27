import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionPieChartComponent } from './distribution-pie-chart.component';

describe('DistributionPieChartComponent', () => {
  let component: DistributionPieChartComponent;
  let fixture: ComponentFixture<DistributionPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
