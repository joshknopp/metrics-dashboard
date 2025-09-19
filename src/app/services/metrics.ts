import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  constructor() { }

  getMetrics() {
    return [
      {
        name: 'Total Revenue',
        type: 'scorecard',
        data: {
          value: 406.32,
          trend: [10, 20, 15, 25, 30, 20, 40]
        }
      },
      {
        name: 'New Users',
        type: 'scorecard',
        data: {
          value: 1030,
          trend: [100, 120, 110, 130, 150, 140, 160]
        }
      },
      {
        name: 'Conversion Rate',
        type: 'donut',
        data: [
          ['Converted', 42],
          ['Not Converted', 58]
        ]
      },
      {
        name: 'User Satisfaction',
        type: 'donut',
        data: [
          ['Satisfied', 85],
          ['Neutral', 10],
          ['Unsatisfied', 5]
        ]
      },
      {
        name: 'Sales vs. Marketing Spend',
        type: 'scatter',
        data: [
          [100, 200], [120, 220], [110, 210], [130, 230], [150, 250], [140, 240], [160, 260]
        ]
      },
      {
        name: 'Support Tickets',
        type: 'scorecard',
        data: {
          value: 42,
          trend: [5, 10, 8, 12, 15, 10, 14]
        }
      }
    ];
  }
}
