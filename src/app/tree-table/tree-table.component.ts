import { Component, OnInit } from '@angular/core';
import { Node, Options } from 'ng-material-treetable';
import {Report, Task} from '../model/model.module';
import {DataService} from '../data.service';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent implements OnInit {

public dataService: DataService = new DataService;

  treeOptions: Options<Report> = {
    capitalisedHeader: true,
    customColumnOrder: [
      'owner', 'name', 'backup', 'protected'
    ]
  };

  singleRootTree: Node<Report> = this.dataService.getMockDataTreeReport();

  arrayOfNodesTree: Node<Task>[] = this.dataService.getMockDataTreeTasks();

  logNode(node: Node<Report>) {
    console.log(node);
  }

  ngOnInit() {
  }
}