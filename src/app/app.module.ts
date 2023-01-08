import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksAuthorComponent } from './books/books-author/books-author.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './shared/dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksListComponent,
    BooksAuthorComponent,
    DialogComponent
  ],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
