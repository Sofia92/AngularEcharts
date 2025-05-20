export interface ChartData {
  label: string;
  type: ChartType;
  data: ChartDataItem[];
}

export interface ChartDataItem {
  label: string;
  value: number;
  unit?: string;
}

export enum ChartType {
  LINE = 'line',
  PIE = 'pie',
}
