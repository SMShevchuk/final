import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger(
      'routeChangeAnimation',
      [
        transition('home <=> post1', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }),
          ]),
          query(':enter', [style({ left: '-100%' })]),
          query(':leave', animateChild()),
          group([
            query(':leave', [
              animate(
                '800ms ease-out',
                style({ left: '100%' })
              ),
            ]),
            query(':enter', [
              animate('800ms ease-out', style({ left: '0%' })),
            ]),
          ]),
          query(':enter', animateChild()),
        ]),
      ]
    )
  ],
})
export class AppComponent {
  title = 'final';

  getRouteAnimationState(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    )
  }
}
