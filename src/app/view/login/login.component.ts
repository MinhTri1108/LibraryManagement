import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public users$: User[] = [];
  public loginForm!: FormGroup;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      UserName: ['', Validators.required],
      Pass: ['', [Validators.required]],
    });
  }
  getUserName() {
    return this.loginForm.controls['UserName'];
  }
  getPass() {
    return this.loginForm.controls['Pass'];
  }
  logout() {
    this.userService.logout();
    alert('Bạn đã đăng xuất thành công');
  }
  getValue() {
    return localStorage.getItem('user');
  }
  login() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe({
        next: (data) => {
          console.log(data);
          data.forEach((element) => {
            if (element != null) {
              if (element.Permission == 0) {
                alert('Đăng nhập thành công user');
              } else {
                alert('Đăng nhập thành công admin');
              }
              // switch (element.Permission) {
              //   case 0:
              //     alert('Đăng nhập thành công user');
              //     this.router.navigateByUrl('');
              //     break;
              //   case 1:
              //     alert('Đăng nhập thành công admin');
              //     break;
              //   default:
              //     alert('Đăng nhập thất bại');
              //     break;
              // }
            }
          });
        },
        error: (error) => {
          console.log('ban login that bai', error);
        },
      });
    }
  }
}
