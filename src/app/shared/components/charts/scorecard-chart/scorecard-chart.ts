import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-scorecard-chart',
  standalone: true,
  imports: [HighchartsChartComponent],
  templateUrl: './scorecard-chart.html',
  styleUrls: ['./scorecard-chart.scss']
})
export class ScorecardChartComponent implements OnInit {
  @Input() data: { value: number; trend: number[] } | undefined;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        height: '200px',
        backgroundColor: 'transparent'
      },
      title: {
        text: this.data ? this.data.value.toLocaleString() : '',
        align: 'center',
        verticalAlign: 'bottom',
        style: {
          fontSize: '2rem',
          fontWeight: 'bold'
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false
      },
      plotOptions: {
        area: {
          fillOpacity: 0.2,
          marker: {
            enabled: false
          }
        }
      },
      series: [{
        type: 'area',
        data: this.data ? this.data.trend : []
      }]
    };
  }
}
