import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBooksFavoritesComponent } from './list-books-favorites.component';

describe('ListBooksFavoritesComponent', () => {
  let component: ListBooksFavoritesComponent;
  let fixture: ComponentFixture<ListBooksFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBooksFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBooksFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
