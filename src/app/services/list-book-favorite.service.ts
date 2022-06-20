import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { BookFavorites } from '../model/book-favorites';
@Injectable({
  providedIn: 'root',
})
export class ListBookFavoriteService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // danh sách yêu thích
  getAllBookFavorites(id: any): Observable<BookFavorites[]> {
    return this.http.get<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/get.php?id=' + id
    );
  }
   // chi tiet book
  getIdBookFavorites(data:any):Observable<BookFavorites[]> {
    return this.http.post<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/detail.php',JSON.stringify(data),
    );
  }
  // trang chu book
  getIdBookF(book:any,user:any):Observable<BookFavorites[]> {
    return this.http.get<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/detail2.php?Book_Ids='+book+'&User_Ids='+user
    );
  }
  deleteBookFavorites(id: any): Observable<BookFavorites[]> {
    return this.http.delete<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/delete.php?id=' + id
    );
  }
  // trang chu book
  postBookfavorites(user:any, book:any): Observable<BookFavorites[]> {
    return this.http.get<BookFavorites[]>(
      ' http://localhost/API/api/bookfavorites/post2.php?User_Ids='+ user +'&Book_Ids='+book
    );
  }
  // chi tiet book
  createBookfavorites(form:any): Observable<BookFavorites[]> {
    return this.http.post<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/post.php',form
    );
  }
  // trang chu book
  checkAllBookFavorites(iduser:any,idbook:any): Observable<BookFavorites[]> {
    return this.http.get<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/checkallbookfavorites.php?User_Ids='+iduser+'&Book_Ids='+idbook
    );
  }
// chi tiet book
  checkBookFavorites(id1: any, id2: any): Observable<BookFavorites[]> {
    return this.http.get<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/checkbookfavorites.php?idbook=' +
        id1 +
        '&iduser=' +
        id2
    );
  }
}
