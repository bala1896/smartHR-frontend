import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceReviewListComponent } from './performance-review-list.component';

describe('PerformanceReviewListComponent', () => {
  let component: PerformanceReviewListComponent;
  let fixture: ComponentFixture<PerformanceReviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceReviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
