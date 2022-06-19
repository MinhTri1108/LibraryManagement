import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './admin/create-account/create-account.component';
import { CreateBooksAndStoriesComponent } from './admin/create-books-and-stories/create-books-and-stories.component';
import { EditBooksAndStoriesComponent } from './admin/edit-books-and-stories/edit-books-and-stories.component';
import { ListAccountComponent } from './admin/list-account/list-account.component';
import { ListBooksAndStoriesComponent } from './admin/list-books-and-stories/list-books-and-stories.component';
// import { AuthenService } from './services/authen.service';
import { DetailsOrderComponent } from './user/details-order/details-order.component';
import { ListBookComponent } from './user/list-book/list-book.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { AuthenticationGuard } from './authentication.guard';
import { AdminGuard } from './auth/admin.guard';
import { UserGuard } from './auth/user.guard';
import { BookRentalChartComponent } from './admin/book-rental-chart/book-rental-chart.component';
import { RentalBookListComponent } from './user/rental-book-list/rental-book-list.component';
import { EditAccountComponent } from './admin/edit-account/edit-account.component';
import { ListBookOfRentalComponent } from './admin/list-book-of-rental/list-book-of-rental.component';
import { ListBooksFavoritesComponent } from './user/list-books-favorites/list-books-favorites.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // admin

  {
    path: 'admin/list-account',
    component: ListAccountComponent,
    canActivate: [AdminGuard],
  },
  // { path: 'admin/list-account', loadChildren:()=> ListAccountComponent.then},
  {
    path: 'admin/create-account',
    component: CreateAccountComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/list-book-of-rental',
    component: ListBookOfRentalComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/edit-account/:id',
    component: EditAccountComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/List-BookAndStories',
    component: ListBooksAndStoriesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/Create-BookAndStories',
    component: CreateBooksAndStoriesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/Edit-BookAndStories/:id',
    component: EditBooksAndStoriesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/Book-Rental-Chart',
    component: BookRentalChartComponent,
    canActivate: [AdminGuard],
  },
  // user
  {
    path: 'user/Profile',
    component: ProfileComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'user/Rental-Book-List',
    component: RentalBookListComponent,
    canActivate: [UserGuard],
  },

  {
    path: 'user/Details-Order-Book/:id',
    component: DetailsOrderComponent,
    canActivate: [UserGuard],
  },
  // {
  //   path: 'user/List-Favorite-BookAndStories',
  //   component: DetailsOrderComponent,
  // },
  {
    path: 'user/List-Book',
    component: ListBookComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'user/List-Book-Favorites',
    component: ListBooksFavoritesComponent,
    canActivate: [UserGuard],
  },
  // { path: '**', redirectTo: '/register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
