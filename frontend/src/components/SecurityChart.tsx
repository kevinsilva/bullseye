import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import accessibility from "highcharts/modules/accessibility";
import { DailyTimeSeriesDataTypes } from '../utils/types';

export default function SecurityChart({ data }: DailyTimeSeriesDataTypes) {
  accessibility(Highcharts);
  const stockData =  data.dailyTimeSeries
    .map(({ date, closePrice }) => [new Date(date).getTime(), closePrice])
    .sort((a, b) => a[0] - b[0]);

  const volumeData =  data.dailyTimeSeries
    .map(({ date, volume }) => [new Date(date).getTime(), parseFloat(volume)])
    .sort((a, b) => a[0] - b[0]);

  const options: Highcharts.Options = {
    title: {
        text: ''
    },
    chart: {
      backgroundColor: '#131C20',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date',
      },
      labels: {
        format: '{value:%b \'%y}',
        style: {
          color: '#DDD',
        }
      },
    },
    yAxis: [
      {
        title: {
          text: 'Stock'
        },
        labels: {
          style: {
            color: '#DDD',
          }
        },
      },
      {
        title: {
          text: 'Volume',
        },
        labels: {
          style: {
            color: '#DDD',
          }
        },
        opposite: true,
      },
    ],
    series: [
      {
        type: 'line',
        name: 'Stock',
        data: stockData,
        color: '#FE3D70'
      },
      {
        type: 'line',
        name: 'Volume',
        data: volumeData,
        color: '#73CFFF',
        yAxis: 1,
      },
    ],
    legend: {
      itemStyle: {
        color: '#DDD',
      },
    },
    credits: {
      enabled: false
    },
    accessibility: {
      description: 'Stock chart with volume over time',
    }
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}
