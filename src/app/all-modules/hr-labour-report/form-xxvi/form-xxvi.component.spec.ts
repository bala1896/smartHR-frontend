import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormXXVIComponent } from './form-xxvi.component';

describe('FormXXVIComponent', () => {
  let component: FormXXVIComponent;
  let fixture: ComponentFixture<FormXXVIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormXXVIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormXXVIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
