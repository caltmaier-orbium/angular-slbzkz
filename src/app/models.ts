import {Chart} from 'chart.js';

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

