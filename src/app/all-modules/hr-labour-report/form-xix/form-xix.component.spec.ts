import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormXIXComponent } from './form-xix.component';

describe('FormXIXComponent', () => {
  let component: FormXIXComponent;
  let fixture: ComponentFixture<FormXIXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormXIXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormXIXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
