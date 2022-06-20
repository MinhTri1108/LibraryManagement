import { TestBed } from '@angular/core/testing';

import { ListBookFavoriteService } from './list-book-favorite.service';

describe('ListBookFavoriteService', () => {
  let service: ListBookFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListBookFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
