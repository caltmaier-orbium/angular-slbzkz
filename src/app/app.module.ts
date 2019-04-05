import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material';

import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyTableComponent } from './my-table/my-table.component';
import {DemoMaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyTableChartComponent } from './my-table-chart/my-table-chart.component';
import { ChartComponent } from './chart/chart.component';
import { DynTableChartComponent } from './dyn-table-chart/dyn-table-chart.component';
import { DynChartTableRespComponent } from './dyn-chart-table-resp/dyn-chart-table-resp.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { DataService } from './data.service';
import { DynFilterPaginationComponent } from './dyn-filter-pagination/dyn-filter-pagination.component';


const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'doughnut-chart', component: MyDoughnutChartComponent},
 /* {path: 'radar-chart', component: MyRadarChartComponent},
  {path: 'pie-chart', component: MyPieChartComponent}, */
  {path: '**', component: MyBarChartComponent }
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(routes),
    ChartsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
     ],
  declarations: [ AppComponent, HelloComponent, MyBarChartComponent, MyDoughnutChartComponent, MyTableComponent, MyTableChartComponent, ChartComponent, DynTableChartComponent, DynChartTableRespComponent, DynFilterPaginationComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
