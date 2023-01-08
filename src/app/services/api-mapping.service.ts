import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { booksModel } from '../shared/model/bookdetails.model';

@Injectable({
  providedIn: 'root',
})
export class ApiMappingService {
  constructor(private http: HttpClient) {}

  getBooksList(): Observable<{ data: booksModel }> {
    return this.http.get<{ data: booksModel }>(
      'https://s3.amazonaws.com/api-fun/books.json'
    );
  }
}
