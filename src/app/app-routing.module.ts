import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './components/start/start.component';
import { CodeQrComponent } from './components/code-qr/code-qr.component';
// import { from } from 'rxjs';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { SubmitComponent } from './components/submit/submit.component';
import { Submit2Component } from './components/submit2/submit2.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { DreamComponent } from './components/dream/dream.component';
import { DreamRegisterComponent } from './components/dream-register/dream-register.component';
import { DreamStatusComponent } from './components/dream-status/dream-status.component';

const routes: Routes = [
  {path:'', component: StartComponent},
  {path:'qr', component: CodeQrComponent},
  {path: 'submit', component:SubmitComponent},
  {path: 'submit2', component:Submit2Component},
  {path: 'confirmation', component:ConfirmationComponent},
  {path: 'first-page', component:FirstPageComponent},
  {path: 'dream', component:DreamComponent},
  {path: 'dreamStatus', component:DreamStatusComponent},
  {path: 'dreamRegister', component:DreamRegisterComponent},
];
@NgModule({
  imports:
  [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:
    [
      RouterModule
    ],
  declarations: []
})
export class AppRoutingModule { }
