import { Component, Input, OnInit } from '@angular/core';
import { booksAuther } from 'src/app/shared/model/bookdetails.model';

@Component({
  selector: 'app-books-author',
  templateUrl: './books-author.component.html',
  styleUrls: ['./books-author.component.scss'],
})
export class BooksAuthorComponent implements OnInit {
  @Input() autherDetails: booksAuther | null;
  constructor() {
    this.autherDetails = null;
  }

  ngOnInit(): void {}
}
