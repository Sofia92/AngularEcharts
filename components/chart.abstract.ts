import { AfterViewInit, Directive } from '@angular/core';
import * as echarts from 'echarts';

@Directive()
export abstract class ChartAbstract implements AfterViewInit {
  protected option: echarts.EChartsOption = { ...BASE_OPTION };
  protected myChart!: echarts.ECharts;
  protected chartId: string = '';
  ngAfterViewInit() {
    window.addEventListener('resize', (e) => {
      this.myChart.resize();
    });
  }

  protected initChart() {
    this.myChart = echarts.init(document.getElementById(this.chartId) as HTMLDivElement);
  }

}

const BASE_OPTION: echarts.EChartsOption = {
  grid: {},
  legend: {
    show: false,
  }
};