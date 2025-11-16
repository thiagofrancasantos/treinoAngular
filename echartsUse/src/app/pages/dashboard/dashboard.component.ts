import { Component } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import { IData } from '../../models/IData';

@Component({
  selector: 'app-dashboard',
  imports: [NgxEchartsDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  pieOptions: any;
  lineOptions: any;
  areaOptions: any;
  barOptions: any;

  dataDash: IData[] = [
    { country: 'Brasil', quantity: 12 },
    { country: 'Colombia', quantity: 10 },
    { country: 'Dominica', quantity: 7 },
    { country: 'Estonia', quantity: 18 },
    { country: 'Franca', quantity: 13 },
    { country: 'Georgia', quantity: 12 },
  ];

  constructor() {
    this.setPieOptions();
    this.setLineOptions();
    this.setAreaOptions();
    this.setBarOptions();
  }

  private setPieOptions() {
    this.pieOptions = {
      title: { text: 'Relatos por País', left: 'center' },
      tooltip: { trigger: 'item' },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: this.dataDash.map((d) => d.country),
      },
      series: [
        {
          name: 'Quantidade',
          type: 'pie',
          radius: '50%',
          data: this.dataDash.map((d) => ({
            value: d.quantity,
            name: d.country,
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5',
            },
          },
        },
      ],
    };
  }

  private setLineOptions() {
    this.lineOptions = {
      title: { text: 'Relatos por país (Linha)' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: this.dataDash.map((d) => d.country),
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Relatos',
          type: 'line',
          data: this.dataDash.map((d) => d.quantity),
        },
      ],
    };
  }

  private setAreaOptions() {
    this.areaOptions = {
      title: { text: 'Relatos por País(Área)' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: this.dataDash.map((d) => d.country),
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Relatos',
          type: 'line',
          areaStyle: {}, // preenche area
          data: this.dataDash.map((d) => d.quantity),
        },
      ],
    };
  }

  private setBarOptions() {
    this.barOptions = {
      title: { text: 'Relatos por País' },
      tooltip: {},
      legend: { data: ['Relatos'] },
      xAxis: { data: this.dataDash.map((d) => d.country) },
      yAxis: {},
      series: [
        {
          name: 'Relatos',
          type: 'bar',
          data: this.dataDash.map((d) => d.quantity),
        },
      ],
    };
  }
}
