import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBooksAndStoriesComponent } from './edit-books-and-stories.component';

describe('EditBooksAndStoriesComponent', () => {
  let component: EditBooksAndStoriesComponent;
  let fixture: ComponentFixture<EditBooksAndStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBooksAndStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBooksAndStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
