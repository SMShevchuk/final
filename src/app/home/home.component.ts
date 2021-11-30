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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
     
  ],
})
export class HomeComponent implements OnInit {

  open = true;

  constructor() { }
 
  ngOnInit(): void {
    //this.open = false;
    this.open = !this.open;

    setTimeout(()=>{ // <<<---using ()=> syntax
    this.open = true;
    
    }, 850);
    console.log('ngOnInit', this.open);
  }

}
