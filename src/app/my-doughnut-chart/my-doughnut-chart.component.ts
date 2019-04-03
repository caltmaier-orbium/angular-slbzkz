import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {
  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  public doughnutChartOptions = {
        title: {
          display: false,
          text: 'Color test'
        },
        legend: {
          position: 'left',
          display: false,
          fullWidth: false,
          labels: {
            fontSize: 11
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        responsive: true
      };
  constructor() { }
  ngOnInit() {
  }
}