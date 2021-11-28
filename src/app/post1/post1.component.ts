import { Component, DoCheck, OnInit } from '@angular/core';
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
      transition("void => *", [
          style({
            opacity: 0,
            
          }),
          animate('3s', style({opacity: 1}))
      ]),
    ]),
    /*---- 1 ----*/
    trigger('openClose1', [
      transition("void => *", [
          style({
            opacity: 0,
            transform: 'translateY(-150px) rotate(150deg)',
          }),
          animate('1s', style({
            opacity: 1,
            transform: 'translateY(0px) rotate(0deg)',
          }))
      ]),
    ]),
     /*---- 2 ----*/
     trigger('openClose2', [
      transition("void => *", [
          style({
            opacity: 0,
            transform: 'translateX(150px) rotate(0deg) scale(2)',
          }),
          animate('1.2s', style({
            opacity: 1,
            transform: 'translateX(0px) rotate(0deg)',
          }))
      ]),
    ]),
      /*---- 3 ----*/
      trigger('openClose3', [
        transition("void => *", [
            style({
              opacity: 0,
              transform: 'translateX(-150px) rotate(0deg)',
            }),
            animate('.9s', style({
              opacity: 1,
              transform: 'translateX(0px) rotate(0deg)',
            }))
        ]),
      ]),
      /*---- 4 ----*/
      trigger('openClose4', [
        transition("void => *", [
            style({
              opacity: 0,
              transform: 'translateX(50px) rotate(40deg) scaleY(1.3)',
            }),
            animate('1.3s', style({
              opacity: 1,
              transform: 'translateX(0px) rotate(0deg)',
            }))
        ]),
      ]),
  ],
})
export class Post1Component implements OnInit {

  open = true;

  constructor() { }
 
  ngOnInit(): void {
    //this.open = false;
    this.open = false;

    setTimeout(()=>{ // <<<---using ()=> syntax
    this.open = true;
    
    }, 500);


    console.log('ngOnInit', this.open);
  }
}
