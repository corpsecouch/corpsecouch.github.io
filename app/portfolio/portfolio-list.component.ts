import { Component, OnInit }  from '@angular/core';
import { Title }              from '@angular/platform-browser';

@Component({
  styleUrls: [
    'styles/interior.css',
    'app/portfolio/portfolio.styles.css'
  ],
  template: `
  <header>
    <h1 title>My Portfolio</h1>
    <p subtitle>A selection of things I've worked on presented as case studies.</p>
  </header>

  <!--<template ngFor let-caseStudy [ngForOf]="caseStudies">
    <div class="flex row section">
      <div class="content">
        <h2><a [routerLink]="[ '/portfolio', caseStudy.slug ]">{{caseStudy.title}}</a></h2>
        <div [innerHtml]="caseStudy.description"></div>
      </div>
    </div>
  </template>-->

  <section [routerLink]="[ '/portfolio', 'viewmaster' ]">
    <h2 title>Viewmaster</h2>
    <content>
      <p>A holistic VR showcase experience across multiple VR platforms.</p>
      <ul>
        <li>Experience Designer</li>
        <li>Art Director</li>
        <li>Strategist</li>
        <li>Manager</li>
      </ul>
    </content>
  </section>

  <section title="Hex" [routerLink]="[ '/portfolio', 'hex' ]">
    <h2 title>Hex</h2>
    <content>
      <p>The design language for Disney Studio's enterprise applications.</p>
    </content>
  </section>

  <section title="CASTL" [routerLink]="[ '/portfolio', 'castl' ]">
    <h2 title>CASTL</h2>
    <content>
      <p>The gatekeeper for all stories that Disney turns into films, CASTL manages the pre-greenlight process of script and story development.</p>
      <ul>
        <li>Experience Designer</li>
        <li>Product Owner</li>
        <li>Art Director</li>
        <li>Strategist</li>
        <li>Manager</li>
      </ul>
    </content>
  </section>
  `
})
export class PortfolioListComponent implements OnInit {
  constructor(private titleService:Title){}

  ngOnInit(){
    this.titleService.setTitle('Portfolio of Jason Bejot');
  }
}
