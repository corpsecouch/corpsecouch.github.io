import { Component, Input } from '@angular/core';

import { Article }  from '../data/article';

@Component({
  selector: 'article',
  styles: [`
    .image{
      overflow: hidden;
    }

    .image > img{
      width: 100%;
    }

    .date{
      font-size: 0.8rem;
    }

    .subtitle{
      font-size: 1.3rem;
      letter-spacing: 0.08rem;
      line-height: 2rem;
    }

  `],
    template: `
    <div class="image">
      <img *ngIf="data.image" src="https://cdn-images-1.medium.com/max/2000/{{data.image}}">
    </div>
    <a class="title" href="http://medium.com/@jasonbejot/{{data.slug}}">{{data.title}}</a>
    <div class="date">{{data.date}}</div>
    <div class="subtitle">{{data.subtitle}}</div>
    `
})
export class ArticleComponent  {
  @Input() data:Article;
}
