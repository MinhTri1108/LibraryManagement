import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  EditAccountForm!: FormGroup;
  id!: string;
  user!: User[];
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  
  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.getIdUser()).subscribe((data: any) => {
      this.user = data;
    });
    this.EditAccountForm = this.fb.group({
      Fullname: new FormControl(null, Validators.required),
      Username: new FormControl(null, Validators.required),
      Pass: new FormControl(null, Validators.required),
      Permission: new FormControl(null, Validators.required),
    });
  }
  getIdUser()
  {
    return this.id = this.route.snapshot.params['id'];
  }
  UpdateAccount(EditAccountForm:any)
  {
    if(EditAccountForm != null)
    {
      this.userService.updateUser(this.EditAccountForm.value,this.getIdUser())
      .subscribe((res:any)=>{
        console.warn(res);
        alert('Cập nhập thông tin thành công');
        this.router.navigateByUrl('user/List-Account');
      })
    }
  }
}
