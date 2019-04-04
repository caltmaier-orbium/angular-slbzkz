import { Component, ViewChild } from '@angular/core';
import { SimpleNotificationsComponent } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../data.service'

@Component({
  selector: 'app-dyn-chart-table-resp',
  templateUrl: './dyn-chart-table-resp.component.html',
  styleUrls: ['./dyn-chart-table-resp.component.css']
})
export class DynChartTableRespComponent  {
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