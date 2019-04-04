import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../data.service'

@Component({
  selector: 'app-dyn-table-chart',
  templateUrl: './dyn-table-chart.component.html',
  styleUrls: ['./dyn-table-chart.component.css']
})
export class DynTableChartComponent implements OnInit {

  public dataService: DataService = new DataService;

  ELEMENT_DATA;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'chart'];

  dataSource; 

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {    
    this.ELEMENT_DATA = this.dataService.getMockDataElement();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
  }
}

