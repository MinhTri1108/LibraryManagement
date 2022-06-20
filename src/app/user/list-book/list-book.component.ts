import { LiteralArrayExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { data } from 'jquery';
import { Observable } from 'rxjs/internal/Observable';
import { LibraryManagement } from 'src/app/model/library-management';
import { LibraryManagementService } from 'src/app/services/library-management.service';
import { UserService } from 'src/app/services/user.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ListBookFavoriteService } from 'src/app/services/list-book-favorite.service';
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  // id!: number;
  iduser!: any;
  bookfavorite!: any;
  check!: any;
  public listBooks$: LibraryManagement[] = [];
  public listIdBooks$: LibraryManagement[] = [];
  public dataList: Data[] = [];
  bookForm!: FormGroup;
  constructor(
    private libraryManagementService: LibraryManagementService,
    private ListBookFavoriteService: ListBookFavoriteService,
    private userservice: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchAllBook();
    this.checkBookFavorite(this.getinfoID());
    this.bookForm = this.fb.group({
      Book_Ids: new FormControl(null, Validators.required),
      User_Ids: new FormControl(null, Validators.required),
      // DescribeBook: new FormControl(null, Validators.required),
    });
    // this.getIdBook(this.route.snapshot.paramMap.get('id'));
    // this.listBooks$ = this.librarymanagementService.getAllBook();
    // console.log(this.librarymanagementService.checkBookFavorite(17,this.UserService.getUserIDInfo()))
  }
  fetchAllBook(): void {
    this.libraryManagementService.getAllBook().subscribe((data) => {
      // data = JSON.parse(JS ON.stringify(data));
      // console.log(data);
      this.listBooks$ = data;
    });
  }
  getIdBook(id: any) {
    return id;
  }
  getinfoID(): void {
    this.iduser = this.userservice.getUserIDInfo();
    return this.iduser;
  }
  getid(id:any)
  {
    console.log(id);
  }
  
  checkBookFavorite(id: any) {
    this.ListBookFavoriteService.getAllBookFavorites(
      this.getinfoID()
    ).subscribe((data: any) => {
      // console.log(this.getinfoID());
      this.bookfavorite = data;  
      if(this.bookfavorite == false)
      {
        this.check=0;
        
      }
      console.log(this.bookfavorite);
    });
  }
  
  getCheck()
  {
    // console.log(this.check);
    return this.check;
  }

  // checkBookFavorite(id: any) {
  //   // console.log(
  //   //  this.librarymanagementService.checkBookFavorite()
  //   // )
  //   //  this.librarymanagementService.checkBookFavorite()
  //   //  .subscribe((data)=>{
  //   //     // this.librarymanagementService=data;
  //   //     //  console.log(this.librarymanagementService);
  //   //  });
  //   this.ListBookFavoriteService.getAllBookFavorites(
  //     this.getinfoID()
  //   ).subscribe((data: any) => {
  //     console.log(this.getinfoID());

  //     this.bookfavorite = data;
  //     console.log(this.bookfavorite);
  //   });
  // }
  favoriteBook(idbook:any) {
    this.ListBookFavoriteService.postBookfavorites(this.userservice.getUserIDInfo(),idbook).subscribe((res) => {
      alert('yêu thích sách thành công');
      this.fetchAllBook();
    });
  }  
  cancelfavorites(idbook:any) {
    this.ListBookFavoriteService.getIdBookF(idbook,this.userservice.getUserIDInfo())
    .subscribe((res)=>{
      console.log(res);
      res.forEach((element:any) => {
        // console.log(element.Id);
        this.ListBookFavoriteService.deleteBookFavorites(element.Id)
        .subscribe((res)=>{
          alert('hủy yêu thích thành công');
          this.fetchAllBook();

        })
      });
    })
  }
 
}
