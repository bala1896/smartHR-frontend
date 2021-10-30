import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveSettlementComponent } from './leave-settlement.component';

describe('LeaveSettlementComponent', () => {
  let component: LeaveSettlementComponent;
  let fixture: ComponentFixture<LeaveSettlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveSettlementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
