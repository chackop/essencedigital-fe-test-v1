import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule
  ],
  providers: [DataServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
