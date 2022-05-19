import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { LibraryManagement } from '../model/library-management';

@Injectable({
  providedIn: 'root',
})
export class LibraryManagementService {
  baseUrl = 'http://localhost/API/api/book/get.php';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAllBook(): Observable<LibraryManagement[]> {
    return this.http.get<LibraryManagement[]>(this.baseUrl);
  }
  // get(id: any): Observable<LibraryManagement> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }
  // create(data: any): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }
  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }
  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }
  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }
  // findByTitle(title: any): Observable<LibraryManagement[]> {
  //   return this.http.get<LibraryManagement[]>(`${baseUrl}?title=${title}`);
  // }
}
