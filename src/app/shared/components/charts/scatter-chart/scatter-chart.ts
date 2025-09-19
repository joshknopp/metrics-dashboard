import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-scatter-chart',
  standalone: true,
  imports: [HighchartsChartComponent],
  templateUrl: './scatter-chart.html',
  styleUrls: ['./scatter-chart.scss']
})
export class ScatterChartComponent implements OnInit {
  @Input() data: any[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'scatter',
        backgroundColor: 'transparent'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      xAxis: {
        title: {
          text: 'Marketing Spend'
        }
      },
      yAxis: {
        title: {
          text: 'Sales'
        }
      },
      series: [{
        type: 'scatter',
        name: 'Sales vs. Marketing',
        data: this.data,
        marker: {
          radius: 5
        }
      }]
    };
  }
}
