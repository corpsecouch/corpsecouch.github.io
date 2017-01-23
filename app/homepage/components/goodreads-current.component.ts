import { Component, OnInit }  from '@angular/core';

import { GoodreadsService }   from '../services/goodreads.service';
import { Book }               from '../data/book';

@Component({
  selector: 'goodreads-current',
  template: `
  <book [data]="book"></book>
  `
})
export class GoodreadsCurrentComponent implements OnInit  {

  private book:Book;
  private errorMessage:any;

  constructor(private goodreadsService:GoodreadsService) {
    console.log('GoodreadsCurrentComponent::constructor');
  }

  ngOnInit() {
    console.log('GoodreadsCurrentComponent::ngOnInit');
    this.goodreadsService.getCurrentBook()
      .subscribe(
        book => this.book = book,
        error => this.errorMessage = <any>error);
  }

}
