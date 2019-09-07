import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxImageCompressService} from 'ngx-image-compress';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
