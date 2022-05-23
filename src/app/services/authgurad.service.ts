import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguradService {

  constructor(
    private router: Router  
  ) { }

  public isAuthenticated(): boolean {
    return !localStorage.getItem("user"); 
  }
  // checkUser()
  // {
  //   const user = JSON.parse(localStorage.getItem('user') || 'null')
  //   if( user === null)
  //   {
  //     return  this.router.navigateByUrl('/login');
  //   }
  //   else
  //   {
  //     user.forEach((element: any)=>
  //     {
  //       if(element.Permission == 0)
  //       {
  //          this.router.navigateByUrl('user/List-Book');
  //       }
  //       if(element.Permission == 1)
  //       {
  //         this.router.navigateByUrl('admin/list-account');
  //       }
  //     })
  //   }
  //   return  this.router.navigateByUrl('/login');

  // }
  gettoken()
  {  
    return !!localStorage.getItem("user");  
  }
  getAdmin():any
  {
    let test = false;
    const user = JSON.parse(localStorage.getItem('user') || 'null')
   
    if(user !== null)
    {
      user.forEach((element: any)=>
      {
        if(element.Permission == 1)
        {
          test=true;
        }
      })
    }
    
    // console.log(tes)
    return test;
  }
  getUser():any
  {
    let test=false;
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    if(user !== null)
    {
      user.forEach((element: any)=>
      {
        if(element.Permission == 0)
        {
          test=true;
        }
      })
    }
    return test;
  }
}
