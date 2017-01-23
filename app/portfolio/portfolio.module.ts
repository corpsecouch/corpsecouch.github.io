import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { PortfolioRoutingModule }       from './portfolio-routing.module';

import { PortfolioComponent }           from './portfolio.component';
import { PortfolioListComponent }       from './portfolio-list.component';
import { ViewmasterComponent }          from './case-studies/viewmaster.component';
import { HexComponent }                 from './case-studies/hex.component';
import { CastlComponent }               from './case-studies/castl.component';
import { ARConceptComponent }           from './case-studies/ar-concept.component';

import { VisualExampleComponent }       from './components/visual-example.component';
import { SectionComponent }             from './components/section.component';
import { HeaderComponent }              from './components/header.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  declarations: [
    PortfolioComponent,
    PortfolioListComponent,
    ViewmasterComponent,
    HexComponent,
    CastlComponent,
    ARConceptComponent,
    VisualExampleComponent,
    SectionComponent,
    HeaderComponent
  ]
})
export class PortfolioModule { }
