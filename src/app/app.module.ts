import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataServiceService } from './data-service.service';
import { ListSearchPipe } from './pipe/list-search.pipe';
import { ListSortPipe } from './pipe/list-sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListSearchPipe,
    ListSortPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [DataServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
