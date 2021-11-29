import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post4',
  templateUrl: './post4.component.html',
  styleUrls: ['./post4.component.scss'],
  animations: [
    trigger('openClose', [
      transition('void=>*', [
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        }),
        animate('3s', style({
          opacity: 1,
          transform: 'translateX(0)',
        }))
      ]),
    ]),
  ]
})
export class Post4Component implements OnInit {

  open = true;

  constructor() { }

  ngOnInit(): void {
    this.open = false;
    setTimeout(() => {
      this.open = true;
    }, 500);
  }

}
