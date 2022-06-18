import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  createAccountForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createAccountForm = this.fb.group({
      FullName: new FormControl(null, Validators.required),
      UserName: new FormControl(null, Validators.required),
      Pass: new FormControl(null, Validators.required),
      Permission: new FormControl(null, Validators.required),
    });
  }
  createAccount(createAccountForm:any)
  {
    if(createAccountForm != null)
    {
      this.userService.register(this.createAccountForm.value)
      .subscribe((res:any)=>{
      console.warn(res);
      alert('bạn đã tạo tài khoản thành công');
        this.router.navigateByUrl('user/List-Account');
      })
    }
  }

}
