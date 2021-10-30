import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLabourReportComponent } from './hr-labour-report.component';

describe('HrLabourReportComponent', () => {
  let component: HrLabourReportComponent;
  let fixture: ComponentFixture<HrLabourReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrLabourReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrLabourReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
