import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItalicTextDirective } from './italic-text.directive';
import { BgColorDirective } from './bg-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItalicTextDirective,
    BgColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
