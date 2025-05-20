import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts';
import { ChartData } from './typings';
import { ChartAbstract } from './chart.abstract';
@Component({
  selector: 'chart-line',
  template: `<div id="echarts-line" class="chart-item line"></div>`,
  styleUrls: ['./chart.scss']
})
export class LineChartComponent extends ChartAbstract implements OnChanges {
  @Input() chartData!: ChartData;
  override option: echarts.EChartsOption = { ...BASE_OPTION };
  override chartId: string = 'echarts-line';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData']) {
      const labels = this.chartData.data.map((d: any) => d.label);
      const values = this.chartData.data.map((d: any) => d.value);
      this.option.xAxis = { ...this.option.xAxis, data: labels };
      this.option.series = [{ type: 'line', data: values, smooth: true }];

      if (!this.myChart) {
        this.initChart();
      };

      this.myChart.setOption(this.option);
    }
  }
}

const BASE_OPTION: echarts.EChartsOption = {
  grid: {},
  legend: {
    show: false,
  },
  tooltip: {
    trigger: 'axis',
    confine: true,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    textStyle: {
      color: '#000',
      fontSize: 12,
    }
  },
  xAxis: {
    type: 'category',
    data: [],
  },
  yAxis: {
    type: 'value',
  },
  series: [],
  // color: undefined,
};