import { Component, OnInit } from '@angular/core';
import { Node, Options } from 'ng-material-treetable';
import {Report, Task} from '../model/model.module';
import {DataService} from '../data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent {

treeOptions: Options<Report> = {
    capitalisedHeader: true,
    customColumnOrder: [
      'owner', 'name', 'backup', 'protected'
    ]
  };
public dataService: DataService = new DataService;

singleRootTree: Node<Report> = this.dataService.getMockDataTreeReport();
arrayOfNodesTree: Node<Task>[] = this.dataService.getMockDataTreeTasks();

logNode(node: Node<Report>) {
    console.log(node);
  }

}