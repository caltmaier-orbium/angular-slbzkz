import { Component, OnInit, ViewChild } from '@angular/core';
import { SimpleNotificationsComponent } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../data.service'

@Component({
  selector: 'app-dyn-filter-pagination',
  templateUrl: './dyn-filter-pagination.component.html',
  styleUrls: ['./dyn-filter-pagination.component.css']
})
export class DynFilterPaginationComponent implements OnInit {
  public dataService: DataService = new DataService;

  ELEMENT_DATA;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'chart'];
  dataSource; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.ELEMENT_DATA = this.dataService.getMockDataElement();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}