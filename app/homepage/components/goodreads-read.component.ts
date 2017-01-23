import { Component, OnInit }  from '@angular/core';

import { GoodreadsService }   from '../services/goodreads.service';
import { Book }               from '../data/book';

@Component({
  selector: 'goodreads-read',
  styles: [`
    @keyframes example{
      to{
        -webkit-filter: opacity(1) saturate(1);
        filter: opacity(1) saturate(1);
      }
    }

    book{
      -webkit-filter: opacity(0.16) saturate(0.4);
      filter: opacity(0.16) saturate(0.4);
      margin-right: 0.3rem;
    }

    book:hover{
      -webkit-animation-name: example;
      animation-name: example;

      -webkit-animation-timing-function: ease;
      animation-timing-function: ease;

      -webkit-animation-duration: 0.3s;
      animation-duration: 0.3s;

      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }
  `],
  template: `
  <book *ngFor="let book of books" [data]="book"></book>
  `
})
export class GoodreadsReadComponent implements OnInit  {

  private books:Book[];
  private errorMessage:any;

  constructor(private goodreadsService:GoodreadsService) {
    console.log('GoodreadsReadComponent::constructor');
  }

  ngOnInit() {
    console.log('GoodreadsReadComponent::ngOnInit');
    this.goodreadsService.getReadBooks()
      .subscribe(
        books => this.books = books,
        error => this.errorMessage = <any>error);
  }

}
