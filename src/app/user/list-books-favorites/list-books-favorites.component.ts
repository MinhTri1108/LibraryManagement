import { Component, OnInit } from '@angular/core';
import { LibraryManagementService } from 'src/app/services/library-management.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { BookFavorites } from 'src/app/model/book-favorites';

@Component({
  selector: 'app-list-books-favorites',
  templateUrl: './list-books-favorites.component.html',
  styleUrls: ['./list-books-favorites.component.css']
})
export class ListBooksFavoritesComponent implements OnInit {
  public bookfavorites: BookFavorites[] = [];

  constructor(
    private LibraryManagementService: LibraryManagementService,
    private UserService:UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.UserService.getUserIDInfo())
    this.LibraryManagementService.getAllBookFavorites(this.UserService.getUserIDInfo()).subscribe((data: any) => {
        this.bookfavorites = data;
        console.log(this.bookfavorites);
    });
  }
  destroy(id:any)
  {
    this.LibraryManagementService.deleteBookFavorites(id)
    .subscribe((res)=>{
      this.bookfavorites=this.bookfavorites.filter((item) => item.Id !== id);
      console.log('Deleted ' + id + ' successfully');
      alert('hủy yêu thích thành công');
    })
  }

}
