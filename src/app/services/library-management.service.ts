import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { LibraryManagement } from '../model/library-management';
import { BookFavorites } from '../model/book-favorites';
import { OrderBook } from 'src/app/model/order-book';

@Injectable({
  providedIn: 'root',
})
export class LibraryManagementService {
  // url = 'http://localhost/API/api/book/get.php';
  constructor(private http: HttpClient) {
    // this.getAllBook().subscribe((data) => {});
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // getAllBookFavorites(id: any): Observable<BookFavorites[]> {
  //   return this.http.get<BookFavorites[]>(
  //     'http://localhost/API/api/bookfavorites/get.php?id=' + id
  //   );
  // }
  // deleteBookFavorites(id: any): Observable<BookFavorites[]> {
  //   return this.http.delete<BookFavorites[]>(
  //     'http://localhost/API/api/bookfavorites/delete.php?id=' + id
  //   );
  // }
  // getAllBookrental(id: any): Observable<OrderBook[]> {
  //   return this.http.get<OrderBook[]>(
  //     'http://localhost/API/api/orderbook/bookborrowed.php?id=' + id
  //   );
  // }

  // LibraryManagement
  getAllBook(): Observable<LibraryManagement[]> {
    return this.http.get<LibraryManagement[]>(
      'http://localhost/API/api/book/get.php'
    );
  }
  getIdBook(id: string): Observable<LibraryManagement[]> {
    // const params = new HttpParams().set('id', IdBook);
    const urlgetid = 'http://localhost/API/api/book/detail.php?id=';
    return this.http.get<LibraryManagement[]>(
      'http://localhost/API/api/book/detail.php?id=' + id
    );
  }
  create(data: any): Observable<LibraryManagement[]> {
    return this.http.post<LibraryManagement[]>(
      'http://localhost/API/api/book/post.php',
      data
    );
  }
  update(id: string, data: any): Observable<LibraryManagement[]> {
    return this.http.put<LibraryManagement[]>(
      'http://localhost/API/api/book/put.php?id=' + id,
      JSON.stringify(data),
      this.httpOptions
    );
  }
  delete(id: any): Observable<LibraryManagement[]> {
    return this.http.delete<LibraryManagement[]>(
      'http://localhost/API/api/book/delete.php?id=' + id
    );
  }
}
