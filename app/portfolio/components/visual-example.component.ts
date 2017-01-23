import { Component, Input }  from '@angular/core';

@Component({
  selector: 'visual-example',
  template: `
  <style>
    :host {
      padding: 1rem 1rem 0.6rem 1rem;
      display:block;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }

    span {
      font-size: 0.8rem;
      display: block;
      text-align: center;
      font-style: italic;
    }

    @media screen {
      :host {
        background-color: rgba(0, 0, 0, 0.07);
      }
    }

    @media print {
      img {
        display: block;
        margin: 0 auto;
        max-width: 60%;
      }
    }
  </style>

  <img src="assets/portfolio/{{image}}">
  <span><ng-content></ng-content></span>
  `
})
export class VisualExampleComponent {
  @Input() image:string;
}
