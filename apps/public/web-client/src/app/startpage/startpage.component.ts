import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'slab-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { id: 1, title: 'Card 1', cols: 1, rows: 1 },
          { id: 2, title: 'Card 2', cols: 1, rows: 1 },
          { id: 3, title: 'Card 3', cols: 1, rows: 1 },
          { id: 4, title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { id: 1, title: 'Card 1', cols: 2, rows: 1 },
        { id: 2, title: 'Card 2', cols: 1, rows: 1 },
        { id: 3, title: 'Card 3', cols: 1, rows: 2 },
        { id: 4, title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
