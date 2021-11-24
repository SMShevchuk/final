import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Post1Component } from './post1/post1.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { Post4Component } from './post4/post4.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, data: {animation: 'home' }},

  { path: 'post1', component: Post1Component, data: {animation: 'post1' }},

  { path: 'post2', component: Post2Component, data: {animation: 'post1' } },

  { path: 'post3', component: Post3Component, data: {animation: 'post1' } },

  { path: 'post4', component: Post4Component, data: {animation: 'post1' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
