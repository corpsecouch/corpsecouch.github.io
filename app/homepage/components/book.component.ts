import { Component, Input } from '@angular/core';

import { Book }             from '../data/book';

@Component({
  selector: 'book',
  template: `
  <a title="{{data?.title}}" href="{{data?.url}}" target="_blank"><img src="{{data?.src}}" alt="{{data?.title}}"></a>
  `
})
export class BookComponent {
  @Input() data:Book;
}
