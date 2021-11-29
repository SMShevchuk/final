import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Post4Component } from './post4/post4.component';
import { Post2Component } from './post2/post2.component';
import { Post1Component } from './post1/post1.component';
import { Post3Component } from './post3/post3.component';
import { HomeComponent } from './home/home.component';
import { JonSnowComponent } from './post1/jon-snow/jon-snow.component';
 //import { JonSnowComponent } from './jon-snow/jon-snow.component';

@NgModule({
  declarations: [
    AppComponent,
    Post4Component,
    Post2Component,
    Post1Component,
    Post3Component,
    HomeComponent,
    JonSnowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
