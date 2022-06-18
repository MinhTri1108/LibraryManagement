import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookOfRentalComponent } from './list-book-of-rental.component';

describe('ListBookOfRentalComponent', () => {
  let component: ListBookOfRentalComponent;
  let fixture: ComponentFixture<ListBookOfRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookOfRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookOfRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
