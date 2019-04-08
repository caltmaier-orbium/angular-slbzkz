import { Component, OnInit } from '@angular/core';
import { Node, Options } from 'ng-material-treetable';
import {Report, Task} from '../model/model.module';
import {DataService} from '../data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TreeTableComponent {

public dataService: DataService = new DataService;

dataSource = ELEMENT_DATA;
columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | null;

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  children: PeriodicElement[] | null;
}

const child: PeriodicElement = 
{
    position: 2,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    children: null
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    children: child
  }
]