import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormXXVIIComponent } from './form-xxvii.component';

describe('FormXXVIIComponent', () => {
  let component: FormXXVIIComponent;
  let fixture: ComponentFixture<FormXXVIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormXXVIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormXXVIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
