import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { booksList } from 'src/app/shared/model/bookdetails.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  @Input() booksList: booksList[];
  @Output() sortNumber = new EventEmitter<number>();
  @Output() sendDialogData = new EventEmitter<booksList>();
  sortIconList: string[] = ['fa fa-sort', 'fa fa-sort-asc', 'fa fa-sort-desc'];
  sortIndex: number = 0;
  constructor(private modalService: NgbModal) {}

  // ngOnChanges(change: SimpleChanges): void {
  //   console.log(change);
  //   this.booksList=change['booksList'].currentValue
  // }
  ngOnInit(): void {
    console.log(this.booksList);
  }
  sortChange() {
    this.sortIndex = this.sortIndex == 2 ? 0 : this.sortIndex + 1;
    this.sortNumber.emit(this.sortIndex);
  }
  AddNewBooks(optionBooks?: booksList | null) {
    const modalRef = this.modalService.open(DialogComponent, {
      backdrop: 'static',
      size: 'md',
    });
    modalRef.componentInstance.formData = optionBooks ? optionBooks : null;
    modalRef.result.then((res) => {
      console.log(res);
      if (res) {
        this.sendDialogData.emit(res);
      }
    });
  }
  editList(books: booksList) {
    this.AddNewBooks(books);
  }
}
