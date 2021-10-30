import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDeductionComponent } from './monthly-deduction.component';

describe('MonthlyDeductionComponent', () => {
  let component: MonthlyDeductionComponent;
  let fixture: ComponentFixture<MonthlyDeductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyDeductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
