import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { ResumeComponent }              from './resume.component';

const routes:Routes = [
  {
    path: 'resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class ResumeRoutingModule {}
