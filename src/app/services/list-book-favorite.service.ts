import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  deleteBookFavorites(id: any): Observable<BookFavorites[]> {
    return this.http.delete<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/delete.php?id=' + id
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
