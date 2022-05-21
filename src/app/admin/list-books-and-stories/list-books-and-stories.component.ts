import { LiteralArrayExpr } from '@angular/compiler';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LibraryManagement } from 'src/app/model/library-management';
import { LibraryManagementService } from 'src/app/services/library-management.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-list-books-and-stories',
  templateUrl: './list-books-and-stories.component.html',
  styleUrls: ['./list-books-and-stories.component.css'],
})
export class ListBooksAndStoriesComponent implements OnInit {
  // @ViewChild(DataTableDirective, { static: false })
  // datatableElement: any = DataTableDirective;
  // min: any = 0;
  // max: any = 0;
  // listBooks: any;
  // public listBooks$!: Observable<LibraryManagement[]>;
  // public listBook: Array<LibraryManagement> = [];
  public listBooks$: LibraryManagement[] = [];
  public listIdBooks$: LibraryManagement[] = [];
  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject<any>();
  constructor(
    private librarymanagementService: LibraryManagementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchAllBook();
    // $.fn.dataTable.ext.search.push(
    //   (settings: any, data: string[], dataIndex: any) => {
    //     const id = parseFloat(data[0]) || 0; // use data for the id column
    //     return (
    //       (Number.isNaN(this.min) && Number.isNaN(this.max)) ||
    //       (Number.isNaN(this.min) && id <= this.max) ||
    //       (this.min <= id && Number.isNaN(this.max)) ||
    //       (this.min <= id && id <= this.max)
    //     );
    //   }
    // );
    // this.getIdBook(this.route.snapshot.paramMap.get('id'));
    // this.listBooks$ = this.librarymanagementService.getAllBook();
  }
  // ngOnDestroy(): void {
  //   this.dtOptions = {
  //     // Declare the use of the extension in the dom parameter
  //     dom: 'Bfrtip',
  //   };
  //   this.dtTrigger.unsubscribe();
  //   $.fn.dataTable.ext.search.pop();
  // }
  // filterById(): void {
  //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.draw();
  //   });
  // }
  fetchAllBook(): void {
    this.librarymanagementService.getAllBook().subscribe((data) => {
      // data = JSON.parse(JSON.stringify(data));
      // console.log(data);
      this.listBooks$ = data;
      // this.dtTrigger.next();
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
