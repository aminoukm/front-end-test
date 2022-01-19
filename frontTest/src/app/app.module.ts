import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParserPasswordPalindoneComponent } from './parser-password-palindone/parser-password-palindone.component';

@NgModule({
  declarations: [
    AppComponent,
    ParserPasswordPalindoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
