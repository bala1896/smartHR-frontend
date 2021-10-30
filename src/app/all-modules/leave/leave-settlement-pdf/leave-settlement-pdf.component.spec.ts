import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveSettlementPdfComponent } from './leave-settlement-pdf.component';

describe('LeaveSettlementPdfComponent', () => {
  let component: LeaveSettlementPdfComponent;
  let fixture: ComponentFixture<LeaveSettlementPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveSettlementPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveSettlementPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
