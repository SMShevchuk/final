import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.scss'],
  animations: [
    trigger('openClose', [
      transition('void=>*', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)',
        }),
        animate('3s', style({
          opacity: 1,
          transform: 'translateY(0)',
        }))
      ]),
    ]),
  ]
})
export class Post3Component implements OnInit {

  constructor() { }
  open = true;
  ngOnInit(): void {
    this.open = false;
    setTimeout(() => {
      this.open = true;
    }, 500);
  }
}


