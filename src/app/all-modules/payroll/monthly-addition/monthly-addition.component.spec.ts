import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyAdditionComponent } from './monthly-addition.component';

describe('MonthlyAdditionComponent', () => {
  let component: MonthlyAdditionComponent;
  let fixture: ComponentFixture<MonthlyAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
