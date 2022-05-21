import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public createForm!: FormGroup;

  constructor(     
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      FullName: ['', Validators.required],
      UserName: [null, Validators.required],
      Pass: ['', [Validators.required]],
      Permission: "0",      
    });
  }
  getUsername()
  {
    return  this.createForm.controls['UserName'];
  }
  
  create()
  {
    // let foundUser = this.userService.checkUsers(this.getUsername().value)
    // if(foundUser)
    // {
    //   console.log('co')
    //   // alert('tài khoản này đã có người đăng kí, xin mời bạn đăng kí tài khoản khác')
    // }
    // else
    // {
    //   console.log('khong');
      this.userService.register(this.createForm.value)
      .subscribe((res:any)=>{
      console.warn(res);
      alert('bạn đã đăng kí thành công');
      this.router.navigateByUrl('user/List-BookAndStories');
      })
    // }
    
  }
}
