import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {MasterDataChart} from '../model/model.module';

@Component({
  selector: 'app-gradient-chart',
  templateUrl: './gradient-chart.component.html',
  styleUrls: ['./gradient-chart.component.css']
})
export class GradientChartComponent implements OnInit {
 
@Input() public masterData: MasterDataChart;
@Input() public colorsForGradient: any;

  public chartType;
  public chartLabels;
  public chartLegendEnabled;
  public chartData;
  public chartOptions;
  public chartColors;

  _borderWidth: number = 2;
  _borderColor: string = 'rgb(179, 179, 179)';
  _hoverBorderWidth: number = 2;
  _hoverBorderColor: string = 'white';

  @ViewChild("chartCanvas") canvas: ElementRef;
 
  ngOnInit() {
    this.chartType = this.masterData.chartType;
    this.chartLabels = this.masterData.chartLabels;
    this.chartLegendEnabled = this.masterData.chartLegendEnabled;
    this.chartData = this.masterData.chartData;
    this.chartOptions = this.masterData.chartOptions;

      // in ngOnInit
    const gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, this.colorsForGradient[0]);
    gradient.addColorStop(1, this.colorsForGradient[1]);

    const gradientScnd = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);

    gradientScnd.addColorStop(0, this.colorsForGradient[2]);
    gradientScnd.addColorStop(1, this.colorsForGradient[3]);
  
    this.chartColors = [
        {
            backgroundColor: gradient,
            borderWidth: this._borderWidth,
            borderColor: this._borderColor,
            hoverBorderWidth: this._hoverBorderWidth,
            hoverBorderColor: this._hoverBorderColor
        },
        {
          backgroundColor: gradientScnd,
          borderWidth: this._borderWidth,
          borderColor: this._borderColor,
          hoverBorderWidth: this._hoverBorderWidth,
          hoverBorderColor: this._hoverBorderColor
        }
    ];
  }

}