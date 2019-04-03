import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';

import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
 /* {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  {path: 'radar-chart', component: MyRadarChartComponent},
  {path: 'pie-chart', component: MyPieChartComponent}, */
  {path: '**', component: MyBarChartComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes),
    ChartsModule ],
  declarations: [ AppComponent, HelloComponent, MyBarChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
