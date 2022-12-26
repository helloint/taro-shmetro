import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Echarts, { EChartOption, EChartsInstance } from 'taro-react-echarts';
import echarts from '../../assets/js/echarts';
import { getDailyTotal } from '../../store/dailyTotal/dailyTotalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { MetroDaily } from '../utils';

interface Props {
  styleZoom: number;
  styleRatio: number;
}

const getOption: EChartOption = (styleZoom, styleRatio, t) => {
  const option = {
    title: {
      top: 10 * styleZoom * styleRatio,
      itemGap: 10 * styleZoom,
      left: 'center',
      text: t('chart.name'),
      textStyle: {
        fontSize: 20 * styleZoom,
      },
      subtext: t('chart.subtitle'),
      subtextStyle: {
        fontSize: 14 * styleZoom,
      },
      sublink: 'https://weibo.com/u/1742987497',
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
      range: [0, 1500],
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
          return d.getDate() + '日' + '\n\n' + params.value[1] + 'w';
        },
        fontSize: 16 * styleZoom,
        color: '#fff',
      },
      data: [],
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

export const Chart = (props: Props) => {
  const { t } = useTranslation();
  const { styleZoom, styleRatio } = props;
  const ref = useRef<EChartsInstance>(null);
  const [isReady, setIsReady] = useState(false);
  const { dailyTotal } = useAppSelector((state) => state.dailyTotal);
  const dispatch = useAppDispatch();
  const option = useMemo(() => getOption(styleZoom, styleRatio, t), [styleZoom, styleRatio]);

  // console.log(`styleZoom: ${styleZoom}, styleRatio: ${styleRatio}`);
  // console.log(`width: ${750 * styleZoom}, height: ${562 * styleZoom * styleRatio}`);
  // console.log(option);

  useEffect(() => {
    const promise = dispatch(getDailyTotal());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    if (isReady && dailyTotal) {
      const displayData: MetroDaily[] = [];
      const dayOfWeek = new Date(dailyTotal[dailyTotal.length - 1][0]).getDay();
      const totalDisplayDay = 28 + (dayOfWeek ? dayOfWeek : 7);
      dailyTotal.forEach(([date, num]) => {
        displayData.push([date, num]);
        if (displayData.length > totalDisplayDay) {
          displayData.shift();
        }
      });
      option.calendar.range = [displayData[0][0], displayData[displayData.length - 1][0]];
      option.series.data = displayData;
      ref.current.setOption(option);
    }
  }, [isReady, dailyTotal, styleZoom, styleRatio]);

  useEffect(() => {
    // console.log(`### Changed: styleZoom: ${styleZoom}, styleRatio: ${styleRatio}`);
  }, [styleZoom, styleRatio]);

  return dailyTotal ? (
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
  ) : (
    'Loading'
  );
};

export default Chart;
