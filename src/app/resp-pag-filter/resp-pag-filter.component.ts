import { Component, ViewChild } from '@angular/core';
import { SimpleNotificationsComponent } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../data.service'

@Component({
  selector: 'app-resp-pag-filter',
  templateUrl: './resp-pag-filter.component.html',
  styleUrls: ['./resp-pag-filter.component.css']
})
export class RespPagFilterComponent {

  public dataService: DataService = new DataService;

  ELEMENT_DATA;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'chart'];

  dataSource; 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

   ngOnInit() {    
    this.ELEMENT_DATA = this.dataService.getMockDataElement();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}