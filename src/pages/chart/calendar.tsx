import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Echarts, { EChartOption, EChartsInstance } from 'taro-react-echarts';
import echarts from '../../assets/js/echarts';
import { MetroDaily } from '../utils';

interface Props {
  data: MetroDaily;
  styleZoom: number;
  styleRatio: number;
}

const getOption: EChartOption = (dailyTotal, styleZoom, styleRatio, t) => {
  const displayData: MetroDaily[] = [];
  const dayOfWeek = new Date(dailyTotal[dailyTotal.length - 1][0]).getDay();
  const totalDisplayDay = 28 + (dayOfWeek ? dayOfWeek : 7);
  dailyTotal.forEach(([date, num]) => {
    displayData.push([date, num]);
    if (displayData.length > totalDisplayDay) {
      displayData.shift();
    }
  });
  const option = {
    title: {
      top: 20 * styleZoom * styleRatio,
      itemGap: 10 * styleZoom,
      left: 'center',
      text: t('chart.name'),
      textStyle: {
        fontSize: 20 * styleZoom,
      },
    },
    visualMap: {
      min: 0,
      max: 1500,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      itemWidth: 20 * styleZoom,
      itemHeight: 14 * styleZoom * styleRatio,
      textGap: 10 * styleZoom,
      itemGap: 10 * styleZoom,
      textStyle: {
        fontSize: 12 * styleZoom,
      },
      inRange: {
        color: ['#5291FF', 'red'],
      },
      bottom: 10 * styleZoom * styleRatio,
    },
    calendar: {
      top: 100 * styleZoom * styleRatio,
      left: 40 * styleZoom,
      right: 20 * styleZoom,
      bottom: 50 * styleZoom * styleRatio,
      splitLine: {
        lineStyle: {
          color: '#fff',
        },
      },
      orient: 'vertical',
      range: [displayData[0][0], displayData[displayData.length - 1][0]],
      itemStyle: {
        borderWidth: 0.5,
      },
      dayLabel: {
        firstDay: 1,
        margin: 10 * styleZoom,
        fontSize: 12 * styleZoom,
        nameMap: 'ZH',
      },
      monthLabel: {
        nameMap: 'ZH',
        margin: 5 * styleZoom * styleRatio,
        fontSize: 12 * styleZoom,
      },
      yearLabel: { show: false },
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      label: {
        show: true,
        formatter: function (params) {
          var d = echarts.number.parseDate(params.value[0]);
          return d.getDate() + '???' + '\n\n' + params.value[1] + 'w';
        },
        fontSize: 16 * styleZoom,
        color: '#fff',
      },
      data: displayData,
    },
    toolbox: {},
  };
  if (process.env.TARO_ENV !== 'weapp') {
    option.toolbox = {
      feature: {
        saveAsImage: {
          type: 'png',
        },
      },
    };
  }
  return option;
};

export const Calendar = (props: Props) => {
  const { t } = useTranslation();
  const { data: dailyTotal, styleZoom, styleRatio } = props;
  const ref = useRef<EChartsInstance>(null);
  const [isReady, setIsReady] = useState(false);
  const option = useMemo(() => getOption(dailyTotal, styleZoom, styleRatio, t), [dailyTotal, styleZoom, styleRatio, t]);

  // console.log(`styleZoom: ${styleZoom}, styleRatio: ${styleRatio}`);
  // console.log(`width: ${750 * styleZoom}, height: ${562 * styleZoom * styleRatio}`);
  // console.log(option);

  useEffect(() => {
    if (isReady && dailyTotal) {
      ref.current.setOption(option);
    }
  }, [isReady, dailyTotal, styleZoom, styleRatio, option]);

  return (
    <Echarts
      isPage={false}
      key='metro'
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

export default Calendar;
