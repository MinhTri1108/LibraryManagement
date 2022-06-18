import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LibraryManagementService } from 'src/app/services/library-management.service';
import { LibraryManagement } from 'src/app/model/library-management';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-books-and-stories',
  templateUrl: './create-books-and-stories.component.html',
  styleUrls: ['./create-books-and-stories.component.css'],
})
export class CreateBooksAndStoriesComponent implements OnInit {
  public book!: LibraryManagement;
  public bookForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private librarymanagementService: LibraryManagementService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      NameBook: new FormControl(null, Validators.required),
      DescribeBook: new FormControl(null, Validators.required),
      ImageBook: new FormControl(null, Validators.required),
      Amount: new FormControl(null, Validators.required),
      BooksForRental: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}
  get f() {
    return this.bookForm.controls;
  }
  createBook() {
    console.log(this.bookForm.value);
    this.librarymanagementService
      .create(this.bookForm.value)
      .subscribe((res: any) => {
        console.log('BOOk created successfully!');
        alert('Created sách thành công');
        this.router.navigateByUrl('admin/List-BookAndStories');
      });
  }
  // createBook(bookForm: FormGroup) {
  //   if (bookForm.valid) {
  //     this.book = new LibraryManagement(
  //       bookForm.value.name,
  //       bookForm.value.code,
  //       bookForm.value.price,
  //       bookForm.value.price,
  //       bookForm.value.exchange,
  //       false
  //     );
  //     this.librarymanagementService.createBook(this.book).subscribe(
  //       (result: any) => {
  //         // this.message = result.msg;
  //         // this.book = new StoLibraryManagementck('', '', 0, 0, 'NASDAQ', false);
  //       }
  //       // (err: { message: string }) => {
  //       //   this.message = err.message;
  //       // }
  //     );
  //   } else {
  //     console.error('Stock form is in an invalid state');
  //   }
  // }
}
