import { Component, OnInit } from '@angular/core';
import { ApiMappingService } from '../services/api-mapping.service';
import {
  booksAuther,
  booksList,
  booksModel,
} from '../shared/model/bookdetails.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  autherDetailsData: booksAuther;
  booksListData: booksList[];
  booksListRes:booksList[];
  constructor(private apiMappingService: ApiMappingService) {}

  ngOnInit(): void {
    this.getBooksList();
  }
  getBooksList() {
    this.apiMappingService
      .getBooksList()
      .subscribe((res: { data: booksModel }) => {
        this.autherDetailsData = {
          author: res.data.author,
          birthday: res.data.birthday,
          birthPlace: res.data.birthPlace,
        };
        this.booksListData = res.data.books;
        this.booksListRes = res.data.books;
        // console.log(this.booksListRes);
      });
  }
  sortBooksList(event: number) {
    console.log(event);
    let sortData: booksList[] = [];
    let booksListRes: booksList[] = [...this.booksListRes];
    if (event == 1) {
      sortData = booksListRes.sort(function (booksA, booksB) {
        const titleA = booksA.title.toUpperCase();
        const titleB = booksB.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    } else if (event == 2) {
      sortData = booksListRes.sort(function (booksA, booksB) {
        const titleA = booksA.title.toUpperCase();
        const titleB = booksB.title.toUpperCase();
        if (titleA > titleB) {
          return -1;
        }
        if (titleA < titleB) {
          return 1;
        }
        return 0;
      });
    } else {
      sortData = [...this.booksListRes];
    }
    console.log(sortData);
    this.booksListData = [...sortData];
  }
  getFormData(event:booksList){
    this.booksListData = [...this.booksListData,event];
    this.booksListRes = [...this.booksListRes,event];
  }
}
