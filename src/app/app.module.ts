import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { CodeQrComponent } from './components/code-qr/code-qr.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { SubmitComponent } from './components/submit/submit.component';
import { Submit2Component } from './components/submit2/submit2.component';
import { FirstPageComponent } from './components/first-page/first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    CodeQrComponent,
    ConfirmationComponent,
    SubmitComponent,
    Submit2Component,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
