import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderBookService } from 'src/app/services/order-book.service';
import { OrderBook } from 'src/app/model/order-book';

@Component({
  selector: 'app-list-book-of-rental',
  templateUrl: './list-book-of-rental.component.html',
  styleUrls: ['./list-book-of-rental.component.css'],
})
export class ListBookOfRentalComponent implements OnInit {
  public listBookRental: OrderBook[] = [];
  constructor(
    private orderbookService: OrderBookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchAllBookRental();
  }
  fetchAllBookRental(): void {
    this.orderbookService.getRentalBook().subscribe((data) => {
      console.log(data);
      this.listBookRental = data;
    });
  }
  giveBookBack(): void {}
  counter(i: number) {
    return new Array(i);
  }
}
