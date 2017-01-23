import { Component, OnInit }  from '@angular/core';

import { MediumService }      from '../services/medium.service';

@Component({
  selector: 'medium',
  styles:[`
  .articles{
    width: 100%;
    position: relative;
  }

  article{
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    width: 100%;
    margin-right: 8rem;
    margin-bottom: 2rem;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0.07);
    padding: 0.5em;
  }

  .more{
    display: block;
    text-align: center;
  }
  `],
  template:`
  <div class="articles">
    <article *ngFor="let article of articles" [data]="article"></article>
    <a href="" target="_blank" class="more">Read more&#8230;</a>
  </div>
  `
})
export class MediumComponent implements OnInit {

  private articles:any;
  private errorMessage:any;

  constructor(private mediumService:MediumService) {
    console.log('MediumComponent::constructor');
  }

  ngOnInit() {
    console.log('MediumComponent::ngOnInit');
    this.mediumService.getRecentArticles()
      .subscribe(
        articles => this.articles = articles,
        error => this.errorMessage = <any>error);
  }

}
