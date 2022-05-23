import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, switchMap, tap  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  // private currentUser!: BehaviorSubject<User>;
  url='http://localhost/API/api/user';
  // urlLogin='http://localhost/API/API/api/user/login.php';
  // urlPost='http://localhost/API/API/api/user/post.php';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.url+'/get.php');
  }
  checkUsers(UserName:string) : Observable<User[]> {
    return this.http.post<User[]>(this.url+'/get.php' ,JSON.stringify(UserName),this.httpOptions);
  }
  // login(UserName:string , Pass:string): Observable<User[]> {
  login(loginForm:any): Observable<User[]> {
    return this.http.post<User[]>(this.url+'/login.php', JSON.stringify(loginForm),this.httpOptions)
    .pipe(
        map((user => {
          // user.forEach((element)=>{
          //   localStorage.setItem('permission', JSON.stringify(element.Permission));
          // })
          // this.currentUserSubject.next(user)
          localStorage.setItem('user', JSON.stringify(user));
          return user;
      }))
      );
  }
  logout(){
      localStorage.removeItem('user');
      // localStorage.removeItem('permission');
      alert('Bạn đã đăng xuất thành công')
      // this.currentUserSubject.next(null);
  }
  register(createForm:any) : Observable<User[]> {
    return this.http.post<User[]>(this.url+'/post.php', JSON.stringify(createForm),this.httpOptions)
  }
  profile() : Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  addUser() : Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  destroyUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  updateUsesr() : Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  getUserInfo()
  {
    let fullname='';
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    if(user !== null)
    {
      user.forEach((element: any)=>
      {
        fullname=element.FullName;
      })
    }
    // console.log(fullname)
    return fullname;
  }
}
