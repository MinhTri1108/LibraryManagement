import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryManagement } from 'src/app/model/library-management';
import { LibraryManagementService } from 'src/app/services/library-management.service';
import { UserService } from 'src/app/services/user.service';
import { DatePipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OrderBookService } from 'src/app/services/order-book.service';
import { OrderBook } from 'src/app/model/order-book';
import { ListBookFavoriteService } from 'src/app/services/list-book-favorite.service';
@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.css'],
})
export class DetailsOrderComponent implements OnInit {
  id!: string;
  book!: LibraryManagement[];
  userorderbook!: OrderBook[];
  orderGroup!: FormGroup;
  currentDateTime!: any;
  iduser!: any;
  bookfavorite!: any;
  // public today = Date.now();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private libraryManagementService: LibraryManagementService,
    private userservice: UserService,
    private orderbookservice: OrderBookService,
    private ListBookFavoriteService: ListBookFavoriteService,
    private router: Router
  ) {}

  // public book: LibraryManagement = <LibraryManagement>{};
  ngOnInit(): void {
    this.getinfoID();
    this.getIdBook();
    this.checkBookFavorite();
    this.checkuserrentalbook();
    this.orderGroup = this.fb.group({
      Book_Ids: new FormControl(null, Validators.required),
      User_Ids: new FormControl(null, Validators.required),
      // TimeBook: new FormControl(null, Validators.required),
    });
  }
  // get f() {
  //   return this.orderGroup.controls;
  // }
  // getTime(): void {
  //   this.currentDateTime = this.datepipe.transform(
  //     new Date(),
  //     'YYYY-MM-dd HH:mm:ss'
  //   );

  //   // console.log(this.currentDateTime);
  // }
  getIdBook(): void {
    this.id = this.route.snapshot.params['id'];
    this.libraryManagementService.getIdBook(this.id).subscribe((data: any) => {
      this.book = data;
      // console.log(this.book);
    });
  }
  getinfoID(): void {
    this.iduser = this.userservice.getUserIDInfo();
    return this.iduser;
  }
  checkuserrentalbook(): void {
    // this.id = this.route.snapshot.params['id'];
    this.orderbookservice
      .chechbookanduser(this.getinfoID(), this.id)
      .subscribe((data: any) => {
        // console.log(this.getinfoID());
        // console.log(this.id);
        this.userorderbook = data;
        // console.log(this.userorderbook);
      });
  }
  orderBook() {
    console.log(this.orderGroup.value);
    this.orderbookservice
      .create(this.orderGroup.value)
      .subscribe((res: any) => {
        // this.librarymanagementService.update()
        alert('Thuê sách thành công');
        this.router.navigateByUrl('admin/List-BookAndStories');
      });
  }
  checkBookFavorite() {
    this.ListBookFavoriteService.checkBookFavorites(
      this.id,
      this.getinfoID()
    ).subscribe((data1: any) => {
      // console.log(this.getinfoID());
      console.log(this.id);
      this.bookfavorite = data1;
      console.log(this.bookfavorite);
    });
  }
}
