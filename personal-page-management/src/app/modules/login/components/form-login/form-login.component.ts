import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formLogin = this._formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  save() {
    alert('submit');
    console.log('user =>', this.formLogin.get('user')?.value);
    console.log('password =>', this.formLogin.get('password')?.value);
  }

}
