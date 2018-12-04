import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './components/start/start.component';
import { CodeQrComponent } from './components/code-qr/code-qr.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'', component: StartComponent},
  {path:'qr', component: CodeQrComponent}
];
@NgModule({
  imports:
  [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:
    [
      RouterModule
    ],
  declarations: []
})
export class AppRoutingModule { }
