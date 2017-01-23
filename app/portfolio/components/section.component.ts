import { Component }  from '@angular/core';

@Component({
  selector: 'section',
  styleUrls: [
    'styles/layout.css',
    'app/portfolio/components/section.styles.css'
  ],
  template: `
  <div class="flex row section">
    <div class="content">
      <ng-content select="[title]"></ng-content>
      <ng-content select="content"></ng-content>
    </div>
  </div>
  `
})
export class SectionComponent { }
