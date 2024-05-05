
import { AreaChart } from '@tremor/react';

interface ChartDataItem {
  date: string;
  [key: string]: string | number; 
}

interface ProgressChartProps {
  chartdata: ChartDataItem[];
  valueKey: string;
}

export function ProgressChart({ chartdata, valueKey }: ProgressChartProps) {
  const formatter = new Intl.NumberFormat('en-US');

  const totalValue = chartdata.reduce((acc, item) => {
    const value = item[valueKey];
    return acc + (typeof value === 'number' ? value : 0);
  }, 0);

  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Total {valueKey}</h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{formatter.format(totalValue)}</p>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={[valueKey]}
        colors={['cyan']}
      />
    </>
  );
}