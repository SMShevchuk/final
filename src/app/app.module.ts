import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Post4Component } from './post4/post4.component';
import { Post2Component } from './post2/post2.component';

@NgModule({
  declarations: [
    AppComponent,
    Post4Component,
    Post2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
