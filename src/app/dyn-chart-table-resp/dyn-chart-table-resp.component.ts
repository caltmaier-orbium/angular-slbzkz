import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { MyDoughnutChartComponent } from '../my-doughnut-chart/my-doughnut-chart.component';
import {MyBarChartComponent} from '../my-bar-chart/my-bar-chart.component';
import {Chart} from 'chart.js';
import {MasterDataChart} from '../chart/chart.component';
import {PeriodicElementChartData} from '../models'

const CHART_DATA: MasterDataChart = { 
  chartType: 'bar', 
  chartLabels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'], 
  chartLegendEnabled: false, 
  chartData:  [
                {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
                {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
              ],
  chartOptions: { scaleShowVerticalLines: false,
                  responsive: true }
};

const CHART_DATA1: MasterDataChart = { 
  chartType: 'doughnut', 
  chartLabels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'], 
  chartLegendEnabled: false, 
  chartData:  [
                {data: [65, 59, 80, 81, 56, 55, 40], label: 'Test1'},
                {data: [28, 48, 40, 19, 86, 27, 90], label: 'Test2'}
              ],
  chartOptions: { scaleShowVerticalLines: false,
                  responsive: true }
};

const CHART_DATA2: MasterDataChart = { 
  chartType: 'pie', 
  chartLabels: ['2006', '2007', '2008', '2009'], 
  chartLegendEnabled: false, 
  chartData:  [
                {data: [65, 59, 80, 81]}
              ],
  chartOptions: { scaleShowVerticalLines: false,
                  responsive: true }
};

const ELEMENT_DATA: PeriodicElementChartData[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', chartData: CHART_DATA},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', chartData: CHART_DATA1},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', chartData: CHART_DATA2}
];

@Component({
  selector: 'app-dyn-chart-table-resp',
  templateUrl: './dyn-chart-table-resp.component.html',
  styleUrls: ['./dyn-chart-table-resp.component.css']
})
export class DynChartTableRespComponent implements OnInit {

  public dataForChart = CHART_DATA;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'chart'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}

