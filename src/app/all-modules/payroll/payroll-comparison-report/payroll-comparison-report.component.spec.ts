import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollComparisonReportComponent } from './payroll-comparison-report.component';

describe('PayrollComparisonReportComponent', () => {
  let component: PayrollComparisonReportComponent;
  let fixture: ComponentFixture<PayrollComparisonReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollComparisonReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollComparisonReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
