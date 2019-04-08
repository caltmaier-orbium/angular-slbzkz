import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chart} from 'chart.js';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ModelModule { }

export interface MasterDataChart {
  chartType: string;
  chartLabels: string[];
  chartLegendEnabled: boolean;
  chartData: any;
  chartOptions: any;    // quuickk&dirty
} 

export interface PeriodicElementChartData {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  chartData: MasterDataChart;
}

export interface PeriodicElementChart {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  chart: Chart;
}

export interface Report {
  name: string;
  owner: string;
  protected: MasterDataChart;
  backup: boolean;
}

export interface Task {
  name: string;
  completed: boolean;
  owner: string;
}