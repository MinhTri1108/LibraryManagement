import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LibraryManagementService } from 'src/app/services/library-management.service';
import { LibraryManagement } from 'src/app/model/library-management';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-books-and-stories',
  templateUrl: './edit-books-and-stories.component.html',
  styleUrls: ['./edit-books-and-stories.component.css'],
})
export class EditBooksAndStoriesComponent implements OnInit {
  id!: string;
  public book!: LibraryManagement;
  bookForm!: FormGroup;
  public statusbooks = ['0', '1'];
  constructor(
    private fb: FormBuilder,
    private librarymanagementService: LibraryManagementService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.librarymanagementService.getIdBook(this.id).subscribe((data: any) => {
      this.book = data;
    });
    this.bookForm = this.fb.group({
      NameBook: new FormControl(null, Validators.required),
      DescribeBook: new FormControl(null, Validators.required),
      ImageBook: new FormControl(null, Validators.required),
      StatusBook: new FormControl(this.statusbooks[0], Validators.required),
    });
  }
  get f() {
    return this.bookForm.controls;
  }
  updateBook() {
    console.log(this.bookForm.value);
    this.librarymanagementService
      .update(this.id, this.bookForm.value)
      .subscribe((res: any) => {
        console.log('BOOk updated successfully!');
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
