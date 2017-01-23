import { Component }  from '@angular/core';

@Component({
  selector: 'header',
  styleUrls: [
    'styles/layout.css',
    'app/resume/components/section.styles.css',
    'app/resume/components/header.styles.css'
  ],
  template: `
  <div class="flex row section">
    <div class="content">
      <ng-content select="[title]"></ng-content>
      <ng-content select="[subtitle]"></ng-content>
    </div>
  </div>
  `
})
export class HeaderComponent { }
