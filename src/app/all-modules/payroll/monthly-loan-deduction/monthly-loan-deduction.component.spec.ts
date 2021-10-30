import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyLoanDeductionComponent } from './monthly-loan-deduction.component';

describe('MonthlyLoanDeductionComponent', () => {
  let component: MonthlyLoanDeductionComponent;
  let fixture: ComponentFixture<MonthlyLoanDeductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyLoanDeductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyLoanDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
