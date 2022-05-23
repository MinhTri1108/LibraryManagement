import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
// UserService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Library Management';
  public FullName:any;

  constructor(
    private userservice:UserService,
    private router:Router
    ){}
  ngOnInit(): void {
      
  }
  getinfo()
  {
    return this.userservice.getUserInfo();
  }
  logout()
  {
    this.userservice.logout();
    this.router.navigateByUrl('/login');
  }
  check()
  {
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    if(user !== null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  checkUser():any
  {
    let auth=0;
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    if(user !== null)
    {
      user.forEach((element: any)=>
      {
        if(element.Permission == 1)
        {
          auth=1;
        }
        if(element.Permission == 0)
        {
          auth=0;
        }
      })
      return auth;
    }
  }
}

