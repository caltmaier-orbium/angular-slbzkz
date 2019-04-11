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

export interface ChartData {
  chartType: string;
  chartLabels: string[];
  chartLegendEnabled: boolean;
  chartData: any;
  chartOptions: any; 
  colorAsGradient: boolean;
  chartColors: string[];
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

export interface Node<T> {
  value: T;
  children: Node<T>[];
}

export interface SearchableNode<T> extends Node<T> {
  id: string;
  children: SearchableNode<T>[];
}

export interface TreeTableNode<T> extends SearchableNode<T> {
  depth: number;
  isVisible: boolean;
  isExpanded: boolean;
  children: TreeTableNode<T>[];
}

export interface NodeInTree<T> extends SearchableNode<T> {
  pathToRoot: SearchableNode<T>[];
}

export interface Options<T> {
  verticalSeparator?: boolean;
  capitalisedHeader?: boolean;
  highlightRowOnHover?: boolean;
  customColumnOrder?: Array<keyof T> & string[];
}