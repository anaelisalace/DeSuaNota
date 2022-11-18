import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-pie-chart',
  template: `
    <svg width="200px" viewBox="0 0 32 32">
      <g stroke-width="13">
        <circle
          cx="16"
          cy="16"
          r="16"
          stroke-dasharray="101"
          stroke-dashoffset="0"
          stroke="#111"
        ></circle>
        <circle
          cx="16"
          cy="16"
          r="16"
          [attr.stroke-dasharray]="value + ' 100'"
          stroke-dashoffset="0"
          stroke=#FE6A01
        ></circle>
      </g>
    </svg>
    <var>{{ value }}%</var>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      :host svg {
        border-radius: 50%;
        transform: rotate(-45deg);
      }
      :host circle {
        fill: transparent; 
      }
      :host var {
        position: absolute;
        font-size: 2rem;
        font-style: normal;
        font-weight: bold;
      }
    `,
  ],
})
export class PieChartComponent {
  @Input()
  value:number | null = 0;
}
