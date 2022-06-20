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
  getAllBookFavorites(id: any): Observable<BookFavorites[]> {
    return this.http.get<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/get.php?id=' + id
    );
  }
  getIdBookFavorites(data:any):Observable<BookFavorites[]> {
    return this.http.post<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/detail.php',data
    );
  }
  deleteBookFavorites(id: any): Observable<BookFavorites[]> {
    return this.http.delete<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/delete.php?id=' + id
    );
  }
  createBookfavorites(form:any): Observable<BookFavorites[]> {
    return this.http.post<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/post.php',form
    );
  }
  checkBookFavorites(id1: any, id2: any): Observable<BookFavorites[]> {
    return this.http.get<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/checkbookfavorites.php?idbook=' +
        id1 +
        '&iduser=' +
        id2
    );
  }
}
