import { Injectable } from '@angular/core';
import { Node, Options } from 'ng-material-treetable';

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
                      responsive: true,
                      scales: {
      xAxes: [{
        ticks: {
          fontColor: 'whitesmoke',  // x axe labels (can be hexadecimal too)
        },
        gridLines: {
          color: '#909090'  // grid line color (can be removed or changed)
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'whitesmoke',  // y axes numbers color (can be hexadecimal too)
        },
        gridLines: {
          color: '#909090'  // grid line color (can be removed or changed)
        },
      }]
    }, }
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

  public getMockDataTreeTasks(){
    return [
    {
      value: {
        name: 'Tasks for Sprint 1',
        completed: true,
        owner: 'Marco'
      },
      children: [
        {
          value: {
            name: 'Complete feature #123',
            completed: true,
            owner: 'Marco'
          },
          children: []
        },
        {
          value: {
            name: 'Update documentation',
            completed: true,
            owner: 'Jane'
          },
          children: [
            {
              value: {
                name: 'Proofread documentation',
                completed: true,
                owner: 'Bob'
              },
              children: []
            }
          ]
        }
      ]
    },
    {
      value: {
        name: 'Tasks for Sprint 2',
        completed: false,
        owner: 'Erika',
      },
      children: [
        {
          value: {
            name: 'Fix bug #567',
            completed: false,
            owner: 'Marco'
          },
          children: []
        },
        {
          value: {
            name: 'Speak with clients',
            completed: true,
            owner: 'James'
          },
          children: []
        }
      ]
    }
  ]
  }

  public getMockDataTreeReport(){
    return {
    value: {
      name: 'Reports',
      owner: 'Eric',
      protected: this.getMockDataBar(),
      backup: true
    },
    children: [
      {
        value: {
          name: 'Charts',
          owner: 'Stephanie',
          protected: false,
          backup: true
        },
        children: []
      },
      {
        value: {
          name: 'Sales',
          owner: 'Virginia',
          protected: false,
          backup: true
        },
        children: []
      },
      {
        value: {
          name: 'US',
          owner: 'Alison',
          protected: true,
          backup: false
        },
        children: [
          {
            value: {
              name: 'California',
              owner: 'Claire',
              protected: false,
              backup: false
            },
            children: []
          },
          {
            value: {
              name: 'Washington',
              owner: 'Colin',
              protected: false,
              backup: true
            },
            children: [
              {
                value: {
                  name: 'Domestic',
                  owner: 'Oliver',
                  protected: true,
                  backup: false
                },
                children: []
              },
              {
                value: {
                  name: 'International',
                  owner: 'Oliver',
                  protected: true,
                  backup: true
                },
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
  }
}