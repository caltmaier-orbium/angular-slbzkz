import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { MyDoughnutChartComponent } from '../my-doughnut-chart/my-doughnut-chart.component';
import {MyBarChartComponent} from '../my-bar-chart/my-bar-chart.component';
import {Chart} from 'chart.js';
import {MasterDataChart} from '../models';
import {PeriodicElementChart} from '../models';

const ELEMENT_DATA: PeriodicElementChart[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', chart: MyDoughnutChartComponent},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', chart: MyBarChartComponent},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', chart: MyDoughnutChartComponent}
];

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

@Component({
  selector: 'app-my-table-chart',
  templateUrl: './my-table-chart.component.html',
  styleUrls: ['./my-table-chart.component.css']
})
export class MyTableChartComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'chart'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}