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
    // Khởi tạo form với validation
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  // Getter để dễ dàng truy cập form controls trong template
  get f() {
    return this.loginForm.controls;
  }

  // Hàm toggle hiển thị/ẩn password
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Hàm xử lý submit form
  onSubmit() {
    this.isSubmitted = true;

    // Kiểm tra form có valid không
    if (this.loginForm.invalid) {
      return;
    }

    // Lấy dữ liệu từ form
    const formData = this.loginForm.value;

    // Giả lập process đăng nhập
    console.log('Đang đăng nhập với:', formData);

    // Hiển thị thông báo thành công
    alert(`Đăng nhập thành công!\nEmail: ${formData.email}\nRemember Me: ${formData.rememberMe}`);

    // Reset form sau khi submit thành công
    this.loginForm.reset();
    this.isSubmitted = false;
  }

}
