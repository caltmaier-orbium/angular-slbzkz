import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-exp-tree',
  templateUrl: './exp-tree.component.html',
  styleUrls: ['./exp-tree.component.css']
})
export class ExpTreeComponent {

  value1 = '';
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  index_iterable = 2;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addElement() {
    ELEMENT_DATA.push({position: this.index_iterable, name: this.value1, weight: 1.0079, symbol: 'H'})
    this.index_iterable = this.index_iterable + 1;
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface ElementData {
  parent: Element;
  children: Element | Element[] | null;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 3, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 4, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 5, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 6, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 7, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 8, name: 'Nitrogen', weight: 14.0067, symbol: 'N'}
  ];

  const ELEMENT_DATA_COLLECTION: ElementData[] = [
  {parent: ELEMENT_DATA[0], children: null},
  {parent: ELEMENT_DATA[1], children: ELEMENT_DATA[0]},
  {parent: ELEMENT_DATA[1], children: [ELEMENT_DATA[0],ELEMENT_DATA[4]]},
  {parent: ELEMENT_DATA[3], children: null},
  {parent: ELEMENT_DATA[4], children: null},
  ];