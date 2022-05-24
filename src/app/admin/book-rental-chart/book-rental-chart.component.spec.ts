import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRentalChartComponent } from './book-rental-chart.component';

describe('BookRentalChartComponent', () => {
  let component: BookRentalChartComponent;
  let fixture: ComponentFixture<BookRentalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookRentalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRentalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
