import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorecardChartComponent } from '../charts/scorecard-chart/scorecard-chart';
import { DonutChartComponent } from '../charts/donut-chart/donut-chart';
import { ScatterChartComponent } from '../charts/scatter-chart/scatter-chart';

@Component({
  selector: 'app-metric-tile',
  standalone: true,
  imports: [CommonModule, ScorecardChartComponent, DonutChartComponent, ScatterChartComponent],
  templateUrl: './metric-tile.html',
  styleUrls: ['./metric-tile.scss']
})
export class MetricTileComponent {
  @Input() metric: any;

  onTileClick($event: any): void {
    console.log(`onTileClick: ${this.metric.name}`, $event);
  }

  onTileKeydownEnter($event: any): void {
    console.log(`onTileKeydownEnter: ${this.metric.name}`, $event);
  }
}
