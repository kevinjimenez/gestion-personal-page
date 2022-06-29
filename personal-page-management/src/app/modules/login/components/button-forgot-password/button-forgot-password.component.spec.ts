import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonForgotPasswordComponent } from './button-forgot-password.component';

describe('ButtonForgotPasswordComponent', () => {
  let component: ButtonForgotPasswordComponent;
  let fixture: ComponentFixture<ButtonForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
