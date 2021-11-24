import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({
         //height: '*',
         //display: 'none', 
         //transform: 'translateX(0%) translateY(0%)',
         //backgroundColor: 'red', 
        })),
      state('false', style({
         //height: '*' ,
         //transform: 'translateX(110%) translateY(110px)', 
        
        })),
      //transition('false <=> true', animate(500)),
     
      transition("void => *", [
        style({
          opacity: 0,
          transform: 'translateX(100%) translateY(0%)',
        }),
        animate(800)
       ]),
   
    ])
        
  ]
})
export class Post1Component implements OnInit {

 

  open = true;





  constructor() { }

  ngOnInit(): void {
  }

}
