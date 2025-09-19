import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsService } from '../../services/metrics';
import { MetricTileComponent } from '../../shared/components/metric-tile/metric-tile';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MetricTileComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {
  public metrics: any[] = [];

  constructor(private metricsService: MetricsService) { }

  ngOnInit(): void {
    this.metrics = this.metricsService.getMetrics();
  }
}
