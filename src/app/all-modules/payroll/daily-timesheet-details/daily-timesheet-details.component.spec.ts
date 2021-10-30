import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTimesheetDetailsComponent } from './daily-timesheet-details.component';

describe('DailyTimesheetDetailsComponent', () => {
  let component: DailyTimesheetDetailsComponent;
  let fixture: ComponentFixture<DailyTimesheetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTimesheetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTimesheetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
