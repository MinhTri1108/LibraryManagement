import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  switchMap,
  tap,
} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  // private currentUserSubject: BehaviorSubject();
  // const subject = new BehaviorSubject();
  // private currentUser!: BehaviorSubject<User>;
  url = 'http://localhost/API/api/user';
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // currentUserSubject: any;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/get.php');
  }
  checkUsers(UserName: string): Observable<User[]> {
    return this.http.post<User[]>(
      this.url + '/get.php',
      JSON.stringify(UserName),
      this.httpOptions
    );
  }
  // login(UserName:string , Pass:string): Observable<User[]> {
  login(loginForm: any): Observable<User[]> {
    return this.http
      .post<User[]>(
        this.url + '/login.php',
        JSON.stringify(loginForm),
        this.httpOptions
      )
      .pipe(
        map(
          (user) => {
          // user.forEach((element)=>{
          //   localStorage.setItem('permission', JSON.stringify(element.Permission));
          // })
          // const check=this.currentUserSubject.next(user)
          // console.log(this.currentUserSubject.next(user));
          // this.currentUserSubject.next(user);
          localStorage.setItem('user', JSON.stringify(user));
          // console.log(this.currentUserSubject.next(user));
          return user;
        }
        ),
      );
  }
  logout() {
    localStorage.removeItem('user');
    // localStorage.removeItem('permission');
    alert('Bạn đã đăng xuất thành công');
    this.currentUserSubject.next(null);
    // this.currentUserSubject.next(null);
  }
  register(createForm: any): Observable<User[]> {
    return this.http.post<User[]>(
      this.url + '/post.php',
      JSON.stringify(createForm),
      this.httpOptions
    );
  }
  profile(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  addUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  destroyUser(id:any): Observable<User[]> {
    return this.http.delete<User[]>(this.url+'detail.php?id='+id,this.httpOptions);
  }
  updateUser(EditAccountForm:any,id:any): Observable<User[]> {
    return this.http.put<User[]>(
      this.url + '/put.php?id='+id,
      JSON.stringify(EditAccountForm),
      this.httpOptions
      );
  }
  getUser(id: any): Observable<User[]> {
    return this.http.get<User[]>(this.url +'/detail.php?id='+id);
  }
  getUserInfo() {
    let fullname = '';
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user !== null) {
      user.forEach((element: any) => {
        fullname = element.FullName;
      });
    }
    // console.log(fullname)
    return fullname;
  }
  getUserIDInfo() {
    let Id = '';
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user !== null) {
      user.forEach((element: any) => {
        Id = element.Id;
      });
    }
    // console.log(fullname)
    return Id;
  }
}
