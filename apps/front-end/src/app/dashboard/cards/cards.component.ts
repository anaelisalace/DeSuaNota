import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'project-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total de avaliações', value: `89.526`, cols: 1, rows: 1 },
          { title: 'Total de avaliados', value: `3.282`, cols: 1, rows: 1 },
          { title: 'Total de abandono', value: `38%`, cols: 1, rows: 1 },
          { title: 'Avaliações / mês', value: `7.456`, cols: 1, rows: 1 },
          { title: 'Card 3', value: 0, cols: 1, rows: 1 },
          { title: 'Card 4', value: 0, cols: 1, rows: 1 }
          ];
      }

      return [
        { title: 'Total de avaliações', value: `89.526`, cols: 1, rows: 1 },
        { title: 'Total de avaliados', value: `3.282`, cols: 1, rows: 1 },
        { title: 'Total de abandono', value: `38%`, cols: 1, rows: 1 },
        { title: 'Avaliações / mês', value: `7.456`, cols: 1, rows: 1 },
        { title: 'Card 3', value: 0, cols: 2, rows: 2 },
        { title: 'Card 4', value: 0, cols: 2, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
