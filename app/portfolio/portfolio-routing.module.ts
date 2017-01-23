import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { PortfolioComponent }           from './portfolio.component';
import { PortfolioListComponent }       from './portfolio-list.component';
import { ViewmasterComponent }          from './case-studies/viewmaster.component';
import { HexComponent }                 from './case-studies/hex.component';
import { CastlComponent }               from './case-studies/castl.component';
import { ARConceptComponent }           from './case-studies/ar-concept.component';

const routes:Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      {
        path: '',
        component: PortfolioListComponent
      },
      /*{
        path: ':slug',
        component: CaseStudyComponent
      }*/
      {
        path: 'viewmaster',
        component: ViewmasterComponent
      },
      {
        path: 'hex',
        component: HexComponent
      },
      {
        path: 'castl',
        component: CastlComponent
      },
      {
        path: 'ar-concept',
        component: ARConceptComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioRoutingModule { }
