import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './admin/create-account/create-account.component';
import { ListAccountComponent } from './admin/list-account/list-account.component';
import { CreateBooksAndStoriesComponent } from './admin/create-books-and-stories/create-books-and-stories.component';
import { ListBooksAndStoriesComponent } from './admin/list-books-and-stories/list-books-and-stories.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DetailsOrderComponent } from './user/details-order/details-order.component';
import { AppRoutesModule } from './app-routes.module';
import { LibraryManagementService } from './services/library-management.service';
import { ListBookComponent } from './user/list-book/list-book.component';
import { EditBooksAndStoriesComponent } from './admin/edit-books-and-stories/edit-books-and-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    ListAccountComponent,
    CreateBooksAndStoriesComponent,
    ListBooksAndStoriesComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DetailsOrderComponent,
    ListBookComponent,
    EditBooksAndStoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutesModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LibraryManagementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
