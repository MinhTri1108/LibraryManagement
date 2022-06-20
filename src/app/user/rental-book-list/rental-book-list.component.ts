import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { OrderBook } from 'src/app/model/order-book';
import { LibraryManagementService } from 'src/app/services/library-management.service';
import { OrderBookService } from 'src/app/services/order-book.service';
import { UserService } from 'src/app/services/user.service';
OrderBookService;
@Component({
  selector: 'app-rental-book-list',
  templateUrl: './rental-book-list.component.html',
  styleUrls: ['./rental-book-list.component.css'],
})
export class RentalBookListComponent implements OnInit {
  public bookrental: OrderBook[] = [];

  constructor(
    private LibraryManagementService: LibraryManagementService,
    private UserService: UserService,
    private orderBookService: OrderBookService
  ) {}

  ngOnInit(): void {
    console.log(this.UserService.getUserIDInfo());

    this.orderBookService
      .getAllBookrental(this.UserService.getUserIDInfo())
      .subscribe((res) => {
        this.bookrental = res;
        console.log(this.bookrental);
      });
  }
}
