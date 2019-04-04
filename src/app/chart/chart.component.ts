import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

@Input() public masterData: MasterDataChart;

  public chartType;
  public chartLabels;
  public chartLegendEnabled;
  public chartData;
  public chartOptions;
  
  ngOnInit() {
    this.chartType = this.masterData.chartType;
    this.chartLabels = this.masterData.chartLabels;
    this.chartLegendEnabled = this.masterData.chartLegendEnabled;
    this.chartData = this.masterData.chartData;
    this.chartOptions = this.masterData.chartOptions;
  }
}

// Interface bauen
export interface MasterDataChart {
  chartType: string;
  chartLabels: string[];
  chartLegendEnabled: boolean;
  chartData: any [];
  chartOptions: any;    // quuickk&dirty
}
