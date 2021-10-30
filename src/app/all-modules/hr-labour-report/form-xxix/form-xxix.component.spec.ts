import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormXXIXComponent } from './form-xxix.component';

describe('FormXXIXComponent', () => {
  let component: FormXXIXComponent;
  let fixture: ComponentFixture<FormXXIXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormXXIXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormXXIXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
