import { LiteralArrayExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LibraryManagement } from 'src/app/model/library-management';
import { LibraryManagementService } from 'src/app/services/library-management.service';
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  // listBooks: any;
  // public listBooks$!: Observable<LibraryManagement[]>;
  // public listBook: Array<LibraryManagement> = [];
  public listBooks$: LibraryManagement[] = [];
  public listIdBooks$: LibraryManagement[] = [];
  constructor(
    private librarymanagementService: LibraryManagementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchAllBook();
    // this.getIdBook(this.route.snapshot.paramMap.get('id'));
    // this.listBooks$ = this.librarymanagementService.getAllBook();
  }
  fetchAllBook(): void {
    this.librarymanagementService.getAllBook().subscribe((data) => {
      // data = JSON.parse(JSON.stringify(data));
      // console.log(data);
      this.listBooks$ = data;
      // console.log(data);
      // this.listBook = data;
    });
  }
  // getIdBook(id: any): void {
  //   this.librarymanagementService.getAllBook(id).subscribe((data) => {
  //     this.listIdBooks$ = data;
  //   });
  // }
}
