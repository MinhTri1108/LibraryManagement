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
  // id book
  // checkBookFavorite(book: any,user:any): Observable<LibraryManagement[]> {
  //   return this.http.get<LibraryManagement[]>(
  //     'http://localhost/API/api/bookfavorites/checkbookfavorites.php?idbook='+book+'&iduser='+user
  //   );
  // }
  checkBookFavorite(): Observable<LibraryManagement[]> {
    return this.http.get<LibraryManagement[]>(
      'http://localhost/API/api/bookfavorites/checkbookfavorites.php?idbook=17&iduser=10'
    );
  }
  getAllBook(): Observable<LibraryManagement[]> {
    return this.http.get<LibraryManagement[]>(
      'http://localhost/API/api/book/get.php'
    );
  }
  //  id user
  getAllBookFavorites(id:any): Observable<BookFavorites[]> {
    return this.http.get<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/get.php?id='+id
    );
  }
  deleteBookFavorites(id:any): Observable<BookFavorites[]> {
    return this.http.delete<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/delete.php?id='+id,
    );
  }
  createBookfavorites(data:any):Observable<BookFavorites[]> {
    return this.http.post<BookFavorites[]>(
      'http://localhost/API/api/bookfavorites/post.php',data
    );
  }
  getAllBookrental(id:any): Observable<OrderBook[]> {
    return this.http.get<OrderBook[]>(
      'http://localhost/API/api/orderbook/bookborrowed.php?id='+id
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
  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }
  // findByTitle(title: any): Observable<LibraryManagement[]> {
  //   return this.http.get<LibraryManagement[]>(`${baseUrl}?title=${title}`);
  // }
}
