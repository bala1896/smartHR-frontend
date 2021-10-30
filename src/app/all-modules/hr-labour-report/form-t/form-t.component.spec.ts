import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTComponent } from './form-t.component';

describe('FormTComponent', () => {
  let component: FormTComponent;
  let fixture: ComponentFixture<FormTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
