import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;
  showPassword = false;

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  get f() {
    return this.loginForm.controls;
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  onSubmit() {
    this.isSubmitted = true;


    if (this.loginForm.invalid) {
      return;
    }


    const formData = this.loginForm.value;

    console.log('Đang đăng nhập với:', formData);

    alert(`Đăng nhập thành công!\nEmail: ${formData.email}\nRemember Me: ${formData.rememberMe}`);

    this.loginForm.reset();
    this.isSubmitted = false;
  }

}
