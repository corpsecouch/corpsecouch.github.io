import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { RouterModule }                 from '@angular/router';
import { HttpModule }                   from '@angular/http';

import { AppComponent }                 from './app.component';
import { AppRoutingModule }             from './app-routing.module';

//import { ResumeModule }                 from './resume/resume.module';
//import { PortfolioModule }              from './portfolio/portfolio.module';
import { HomepageModule }               from './homepage/homepage.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    //ResumeModule,
    //PortfolioModule,
    HomepageModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
