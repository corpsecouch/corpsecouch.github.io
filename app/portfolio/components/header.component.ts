import { Component, Input }  from '@angular/core';

@Component({
  selector: 'header',
  styleUrls: [
    'styles/layout.css',
    'app/portfolio/components/section.styles.css',
    'app/portfolio/components/header.styles.css'
  ],
  template: `
  <div class="section" [style.background-image]="imageUrl ? 'url(' + imageUrl + ')' : ''">
    <div class="flex row wrap">
      <div class="content">
        <ng-content select="[title]"></ng-content>
        <ng-content select="[subtitle]"></ng-content>
      </div>
    </div>
  </div>
  `
})
export class HeaderComponent {
  @Input() imageUrl:string;
}
