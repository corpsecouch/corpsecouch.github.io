import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { HomepageRoutingModule }        from './homepage-routing.module';

import { HomepageComponent }            from './homepage.component';
import { MediumComponent }              from './components/medium.component';
import { ArticleComponent }             from './components/article.component';
import { GoodreadsCurrentComponent }    from './components/goodreads-current.component';
import { GoodreadsReadComponent }       from './components/goodreads-read.component';
import { BookComponent }                from './components/book.component';

import { MediumService }                from './services/medium.service';
import { GoodreadsService }             from './services/goodreads.service';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  declarations: [
    HomepageComponent,
    MediumComponent,
    ArticleComponent,
    GoodreadsCurrentComponent,
    GoodreadsReadComponent,
    BookComponent
  ],
  providers: [
    MediumService,
    GoodreadsService
  ]
})
export class HomepageModule { }
