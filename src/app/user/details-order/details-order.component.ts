import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryManagement } from 'src/app/model/library-management';
import { LibraryManagementService } from 'src/app/services/library-management.service';
@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.css'],
})
export class DetailsOrderComponent implements OnInit {
  id!: string;
  book!: LibraryManagement[];
  constructor(
    private route: ActivatedRoute,
    private librarymanagementService: LibraryManagementService
  ) {}

  // public book: LibraryManagement = <LibraryManagement>{};
  ngOnInit(): void {
    // this.route.data.subscribe((data: { book: LibraryManagement }) => {
    //   this.book = data.book;
    // });
    // this.getIdBook(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];

    this.librarymanagementService.getIdBook(this.id).subscribe((data: any) => {
      this.book = data;
      // console.log(this.book);
    });
    // getIdBook(id: string): void {
    //   this.librarymanagementService.getIdBook(id).subscribe({
    //     next: (data) => {
    //       // this.book = data;
    //       console.log(data);
    //     },
    //     error: (e) => console.error(e),
    //   });
  }
}
