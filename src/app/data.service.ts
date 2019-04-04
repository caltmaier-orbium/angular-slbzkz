import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  CHART_DATA;
  CHART_DATA1;
  CHART_DATA2;

  constructor() {
  }

  public getMockDataElement(){
    this.CHART_DATA = this.getMockDataBar();
    this.CHART_DATA1 = this.getMockDataDoughnut();
    this.CHART_DATA2 = this.getMockDataPie();

    return [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', chartData: this.CHART_DATA},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', chartData: this.CHART_DATA1},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', chartData: this.CHART_DATA2} ];
  }

  getMockDataBar(){
    return { 
          chartType: 'bar', 
          chartLabels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'], 
          chartLegendEnabled: false, 
          chartData:  [
                        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
                        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
                      ],
          chartOptions: { scaleShowVerticalLines: false,
                      responsive: true }
      };
  };

 getMockDataDoughnut(){
    return { 
            chartType: 'doughnut', 
            chartLabels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'], 
            chartLegendEnabled: false, 
            chartData:  [
                          {data: [65, 59, 80, 81, 56, 55, 40]}
                        ],
            chartOptions: { scaleShowVerticalLines: false,
                            responsive: true }
}
  }

  getMockDataPie(){
    return { 
              chartType: 'pie', 
              chartLabels: ['2006', '2007', '2008', '2009'], 
              chartLegendEnabled: false, 
              chartData:  [
                            {data: [65, 59, 80, 81]}
                          ],
              chartOptions: { scaleShowVerticalLines: false,
                              responsive: true }
    }
  }
}