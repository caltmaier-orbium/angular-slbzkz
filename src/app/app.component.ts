import { Component, OnInit } from '@angular/core';
import {ElementRef,Renderer2, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chart: Chart;
  name = 'Angular 5 chartjs';
  masterDivWidth;
  bgColor;

  ngOnInit() {
 //  this.createChartBasic();
  }

  createChartBasic(){
     this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Solicitado', 'Entregado', 'Faltante'],
        datasets: [
          {
            label: 'test',
            data: [
              100, 200, 300
            ],
            backgroundColor: ['#0074D9', '#2ECC40', '#FF4136']
          }
        ]
      },
      options: {
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
        }
      }
    });
  }
}