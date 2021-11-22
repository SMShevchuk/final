import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Post1Component } from './post1/post1.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { Post4Component } from './post4/post4.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'post1', component: Post1Component },

  { path: 'post2', component: Post2Component },

  { path: 'post3', component: Post3Component },

  { path: 'post4', component: Post4Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
