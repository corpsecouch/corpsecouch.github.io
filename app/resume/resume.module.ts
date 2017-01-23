import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { ResumeRoutingModule }          from './resume-routing.module';

import { ResumeComponent }              from './resume.component';
import { SectionComponent }             from './components/section.component';
import { HeaderComponent }              from './components/header.component';

@NgModule({
  imports: [
    CommonModule,
    ResumeRoutingModule
  ],
  declarations: [
    ResumeComponent,
    SectionComponent,
    HeaderComponent
  ]
})
export class ResumeModule { }
