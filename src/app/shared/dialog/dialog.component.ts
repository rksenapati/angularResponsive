import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subject } from 'rxjs';
import { booksList } from '../model/bookdetails.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Input() dialogData: any;
  @Input() formData: null | booksList;
  booksForm: FormGroup;
  dialogClose = new Subject<Boolean>();
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
    this.booksForm = this.fb.group({
      title: ['', Validators.required],
      PublishDate: ['', Validators.required],
      purchaseLink: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    if (this.formData) {
      this.booksForm.patchValue({
        title: this.formData.title,
        PublishDate: this.formData.PublishDate,
        purchaseLink: this.formData.purchaseLink,
        imageUrl: this.formData.imageUrl,
      });
    }
  }
  cancel(val: boolean) {
    this.activeModal.close(val);
  }
  get form() {
    return this.booksForm.controls;
  }
  submit() {
    this.activeModal.close(this.booksForm.value);
  }
}
