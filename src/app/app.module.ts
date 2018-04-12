import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataServiceService } from './data-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [DataServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
