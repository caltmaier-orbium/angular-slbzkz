import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material';

import {DemoMaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartComponent } from './chart/chart.component';
import { DynTableChartComponent } from './dyn-table-chart/dyn-table-chart.component';
import { DynChartTableRespComponent } from './dyn-chart-table-resp/dyn-chart-table-resp.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { DataService } from './data.service';
import { TreeTableComponent } from './tree-table/tree-table.component';
import { TreetableModule } from 'ng-material-treetable';
import { GradientChartComponent } from './gradient-chart/gradient-chart.component';
import { RespChartGradientComponent } from './resp-chart-gradient/resp-chart-gradient.component';
import { RespPagFilterComponent } from './resp-pag-filter/resp-pag-filter.component';
import { MatTreeTableComponent } from './mat-tree-table/mat-tree-table.component';
import { TestMatTreeTableComponent } from './test-mat-tree-table/test-mat-tree-table.component';
import { GradientColorChartComponent } from './gradient-color-chart/gradient-color-chart.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ChartsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    TreetableModule
     ],
  declarations: [ AppComponent, HelloComponent, ChartComponent, DynTableChartComponent, DynChartTableRespComponent, TreeTableComponent, GradientChartComponent, RespChartGradientComponent, RespPagFilterComponent, MatTreeTableComponent, TestMatTreeTableComponent, GradientColorChartComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
