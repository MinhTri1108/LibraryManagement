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
@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.css'],
})
export class DetailsOrderComponent implements OnInit {
  id!: string;
  book!: LibraryManagement[];
  orderGroup!: FormGroup;
  currentDateTime!: any;
  iduser!: any;
  // public today = Date.now();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private librarymanagementService: LibraryManagementService,
    private userservice: UserService,
    private orderbookservice: OrderBookService,
    public datepipe: DatePipe,
    private router: Router
  ) {}

  // public book: LibraryManagement = <LibraryManagement>{};
  ngOnInit(): void {
    this.getinfoID();
    this.getIdBook();
    // this.getTime();
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
    this.librarymanagementService.getIdBook(this.id).subscribe((data: any) => {
      this.book = data;
      // console.log(this.book);
    });
  }
  getinfoID(): void {
    this.iduser = this.userservice.getUserIDInfo();
    return this.iduser;
  }
  orderBook() {
    console.log(this.orderGroup.value);
    this.orderbookservice.create(this.orderGroup.value);
    alert('Thuê sách thành công');
    this.router.navigateByUrl('admin/List-BookAndStories');
  }
}
