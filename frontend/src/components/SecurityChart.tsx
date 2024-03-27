import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { DailyTimeSeriesDataTypes } from '../utils/types';

export default function SecurityChart({ data }: DailyTimeSeriesDataTypes) {
  const stockData =  data.dailyTimeSeries.map(({ date, closePrice }) => [new Date(date).getTime(), closePrice]);
  const volumeData =  data.dailyTimeSeries.map(({ date, volume }) => [new Date(date).getTime(), parseFloat(volume)]);

  const options: Highcharts.Options = {
    title: {
        text: ''
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date',
      },
      labels: {
        format: '{value:%b \'%y}',
      },
    },
    yAxis: [
      {
        title: {
          text: 'Stock',
        },
      },
      {
        title: {
          text: 'Volume',
        },
        opposite: true,
      },
    ],
    series: [
      {
        type: 'line',
        name: 'Stock',
        data: stockData,
      },
      {
        type: 'line',
        name: 'Volume',
        data: volumeData,
        yAxis: 1,
      },
    ],
    credits: {
      enabled: false
    }
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}
