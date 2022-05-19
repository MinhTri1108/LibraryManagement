import { LiteralArrayExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryManagement } from 'src/app/model/library-management';
import { LibraryManagementService } from 'src/app/services/library-management.service';
@Component({
  selector: 'app-list-books-and-stories',
  templateUrl: './list-books-and-stories.component.html',
  styleUrls: ['./list-books-and-stories.component.css'],
})
export class ListBooksAndStoriesComponent implements OnInit {
  listBooks: any;
  // listBooks: LibraryManagement[] = [];
  // public listBook: Array<LibraryManagement> = [];
  // public listBook$: Observable<LibraryManagement[]> | undefined;
  constructor(
    private router: Router,
    private librarymanagementService: LibraryManagementService
  ) {}

  ngOnInit(): void {
    this.librarymanagementService.getAllBook().subscribe((response: any[]) => {
      response = JSON.parse(JSON.stringify(response));
      // console.log(data);
      console.log(response);
      this.listBooks = response;

      // invalid, will error
      // try {
      //   console.log(JSON.parse('Sucessfully saved the data'));
      // } catch (e) {
      //   console.log('Error', e);
      // }
      // // proper JSON "object" from the server
      // console.log(JSON.parse(`{"message": "Sucessfully saved the data"}`));
      // this.listBook = data;
    });
  }
}
