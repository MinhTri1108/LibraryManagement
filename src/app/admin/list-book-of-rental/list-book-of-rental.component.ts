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
  public Status = 1;
  id!: any;
  constructor(
    private orderbookService: OrderBookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchAllBookRental();
    // this.Status = 1;
    // this.giveBookBack();
  }
  fetchAllBookRental(): void {
    this.orderbookService.getRentalBook().subscribe((data) => {
      console.log(data);
      JSON.stringify(data);
      this.listBookRental = data;
    });
  }

  giveBookBack(id: any): void {
    // console.log(this.Status);
    // console.log(id);
    // return id;
    this.orderbookService.updateRentalBook(id).subscribe((res: any) => {
      console.log('đánh dấu thành công');
      // alert('Update sách thành công');
      console.log(res);
    });
  }
  counter(i: number) {
    return new Array(i);
  }
}
