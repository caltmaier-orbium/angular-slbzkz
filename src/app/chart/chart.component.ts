import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() public chartType;
  @Input() public chartLabels;
  @Input() public chartLegendEnabled;
  @Input() public chartData;
  @Input() public chartOptions;

  constructor() { }

  ngOnInit() {
  }
}