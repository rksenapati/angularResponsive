export interface booksModel {
    author: string;
    birthday: string;
    birthPlace: string;
    books: booksList[];
}
export interface booksAuther {
  author: string;
  birthday: string;
  birthPlace: string;
}
export interface booksList {
  title: string;
  PublishDate: string;
  purchaseLink: string;
  imageUrl: string;
}
