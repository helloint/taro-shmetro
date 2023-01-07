import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Echarts, { EChartOption, EChartsInstance } from 'taro-react-echarts';
import echarts from '../../assets/js/echarts';
import { getDailyTotal } from '../../store/dailyTotal/dailyTotalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

interface Props {
  styleZoom: number;
  styleRatio: number;
}

const getOption: EChartOption = (styleZoom, styleRatio, t) => {
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
      left: '8%',
      right: '3%',
      bottom: '16%',
    },
    xAxis: {
      // FIXME: this fontSize doesn't work
      nameTextStyle: {
        fontSize: 12 * styleZoom,
      },
    },
    yAxis: {
      nameTextStyle: {
        fontSize: 12 * styleZoom,
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
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' },
        ],
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
      option.xAxis.data = dailyTotal.map(function (item) {
        return item[0];
      });
      option.series.data = dailyTotal.map(function (item) {
        return item[1];
      });
      ref.current.setOption(option);
    }
  }, [isReady, dailyTotal, styleZoom, styleRatio]);

  useEffect(() => {
    // console.log(`### Changed: styleZoom: ${styleZoom}, styleRatio: ${styleRatio}`);
  }, [styleZoom, styleRatio]);

  return dailyTotal ? (
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
  ) : (
    <div>Loading</div>
  );
};

export default History;
