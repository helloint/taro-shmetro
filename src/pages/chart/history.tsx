import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from '@tarojs/components';
import Echarts, { EChartOption, EChartsInstance } from 'taro-react-echarts';
import echarts from '../../assets/js/echarts';
import { MetroDaily } from '../utils';

interface Props {
  data: MetroDaily;
  styleZoom: number;
  styleRatio: number;
}

const getOption: EChartOption = (data, styleZoom, styleRatio, t) => {
  if (!data) {
    return null;
  }
  const option = {
    title: {
      top: 10 * styleZoom * styleRatio,
      text: t('chart.history'),
      left: 'center',
      textStyle: {
        fontSize: 20 * styleZoom,
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '7%',
      right: '3%',
      bottom: '16%',
    },
    xAxis: {
      data: data.map(function (item) {
        return item[0];
      }),
      axisLabel: {
        textStyle: {
          fontSize: 12 * styleZoom,
        },
      },
    },
    yAxis: {
      axisLabel: {
        textStyle: {
          fontSize: 12 * styleZoom,
        },
      },
    },
    toolbox: {
      right: 10,
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        restore: {},
      },
    },
    dataZoom: [
      {
        startValue: '2020-03-09',
        height: 30 * styleZoom * styleRatio,
        bottom: 25 * styleZoom * styleRatio,
      },
      {
        type: 'inside',
      },
    ],
    visualMap: {
      min: 0,
      max: 1500,
      type: 'piecewise',
      inRange: {
        color: ['#5291FF', 'red'],
      },
      top: 50,
      right: 0,
      show: false,
    },
    series: {
      name: t['chart.unit'],
      type: 'line',
      data: data.map(function (item) {
        return item[1];
      }),
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' },
        ],
        label: {
          fontSize: 12 * styleZoom,
        },
        symbolSize: 50 * styleZoom,
      },
    },
  };
  if (process.env.TARO_ENV !== 'weapp') {
    option.toolbox.feature.saveAsImage = {
      type: 'png',
    };
  }
  return option;
};

export const History = (props: Props) => {
  const { t } = useTranslation();
  const { data: dailyTotal, styleZoom, styleRatio } = props;
  const ref = useRef<EChartsInstance>(null);
  const [isReady, setIsReady] = useState(false);
  const option = useMemo(() => getOption(dailyTotal, styleZoom, styleRatio, t), [dailyTotal, styleZoom, styleRatio, t]);

  useEffect(() => {
    if (isReady && dailyTotal) {
      ref.current.setOption(option);
    }
  }, [isReady, dailyTotal, styleZoom, styleRatio, option]);

  return (
    <Echarts
      isPage={false}
      key='history'
      className=''
      echarts={echarts}
      theme='dark'
      onChartReady={(echartsInstance: EChartsInstance) => {
        ref.current = echartsInstance;
        setIsReady(true);
      }}
      opts={{ width: 750 * styleZoom, height: 562 * styleZoom * styleRatio }}
      option={option}
      style={{
        width: 750 * styleZoom + 'px',
        height: 562 * styleZoom * styleRatio + 'px',
      }}
    ></Echarts>
  );
};

export default History;
