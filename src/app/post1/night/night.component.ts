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
  selector: 'app-night',
  templateUrl: './night.component.html',
  styleUrls: ['./night.component.scss'],
  animations: [
    trigger('openClose', [
      transition("void => *", [
          style({
            opacity: 0,
            transform: 'translateY(-100px) rotate(150deg)',
          }),
          animate('1.5s', style({
            opacity: 1,
            transform: 'translateY(0px) rotate(0deg)',
          }))
      ]),
    ]),
    /*---- 1 ----*/
    trigger('openClose1', [
      transition("void => *", [
          style({
            opacity: 0,
            transform: 'translateY(-100px) rotate(150deg)',
          }),
          animate('1.7s', style({
            opacity: 1,
            transform: 'translateY(0px) rotate(0deg)',
          }))
      ]),
    ]),
    
  ],
})
export class NightComponent implements OnInit {
  open = true;

  constructor() { }
 
  ngOnInit(): void {
    //this.open = false;
    this.open = !this.open;

    setTimeout(()=>{ // <<<---using ()=> syntax
    this.open = true;
    
    }, 1000);
    console.log('ngOnInit', this.open);
  }

}
