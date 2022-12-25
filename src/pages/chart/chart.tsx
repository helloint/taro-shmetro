import { useEffect, useMemo, useRef, useState } from 'react';
import Echarts, { EChartOption, EChartsInstance } from 'taro-react-echarts';
import echarts from '../../assets/js/echarts';
import { getDailyTotal } from '../../store/dailyTotal/dailyTotalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { MetroDaily } from '../utils';

interface Props {
  styleZoom: number;
  styleRatio: number;
}

const getOption: EChartOption = (styleZoom, styleRatio) => {
  return {
    title: {
      top: 10 * styleZoom * styleRatio,
      itemGap: 10 * styleZoom,
      left: 'center',
      text: '上海地铁客流统计',
      textStyle: {
        fontSize: 18 * styleZoom,
      },
      subtext: '数据来源于微博@上海地铁shmetro',
      subtextStyle: {
        fontSize: 12 * styleZoom,
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
        fontSize: 12 * styleZoom,
        color: '#fff',
      },
      data: [],
    },
    toolbox: {
      feature: {
        saveAsImage: {
          type: 'png',
        },
      },
    },
  };
};

export const Chart = (props: Props) => {
  const { styleZoom, styleRatio } = props;
  const ref = useRef<EChartsInstance>(null);
  const [isReady, setIsReady] = useState(false);
  const { dailyTotal } = useAppSelector((state) => state.dailyTotal);
  const dispatch = useAppDispatch();
  const option = useMemo(() => getOption(styleZoom, styleRatio), [styleZoom, styleRatio]);

  console.log(`styleZoom: ${styleZoom}, styleRatio: ${styleRatio}`);
  console.log(`width: ${750 * styleZoom}, height: ${562 * styleZoom * styleRatio}`);
  console.log(option);

  useEffect(() => {
    const promise = dispatch(getDailyTotal());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    if (isReady && dailyTotal) {
      const displayData: MetroDaily[] = [];
      dailyTotal.forEach((item) => {
        displayData.push(item);
        if (displayData.length > 35) {
          displayData.shift();
        }
      });
      option.calendar.range = [displayData[0][0], displayData[displayData.length - 1][0]];
      option.series.data = displayData;
      ref.current.setOption(option);
    }
  }, [isReady, dailyTotal, styleZoom, styleRatio]);

  useEffect(() => {
    console.log(`### Changed: styleZoom: ${styleZoom}, styleRatio: ${styleRatio}`);
  }, [styleZoom, styleRatio]);

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
      opts={{ devicePixelRatio: 2, width: 750 * styleZoom, height: 562 * styleZoom * styleRatio }}
      option={option}
      style={{
        width: 750 * styleZoom + 'px',
        height: 562 * styleZoom * styleRatio + 'px',
      }}
    ></Echarts>
  );
};

export default Chart;
