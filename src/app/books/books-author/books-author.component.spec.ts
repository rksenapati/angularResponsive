import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAuthorComponent } from './books-author.component';

describe('BooksAuthorComponent', () => {
  let component: BooksAuthorComponent;
  let fixture: ComponentFixture<BooksAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
