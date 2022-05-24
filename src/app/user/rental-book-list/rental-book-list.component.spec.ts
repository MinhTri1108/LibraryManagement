import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalBookListComponent } from './rental-book-list.component';

describe('RentalBookListComponent', () => {
  let component: RentalBookListComponent;
  let fixture: ComponentFixture<RentalBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalBookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
