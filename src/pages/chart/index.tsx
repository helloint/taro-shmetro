import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from '@tarojs/components';
import { useShareAppMessage, useShareTimeline } from '@tarojs/taro';
import { useWindowSize } from '../utils';
import Chart from './chart';
import History from './history';

import './index.scss';

export default function Index() {
  const { t } = useTranslation();

  /*
  （1）容器初次初始化（2）容器resize
  触发容器配置重置，重置完后，触发容器变化事件（containerUpdatedCount）
  容器变化触发组件重新渲染
   */
  const ref = useRef<HTMLElement>(null);
  const [styleZoom, setStyleZoom] = useState(0);
  // control the height scale, the bigger, the taller. height = (width / 2.5) * styleRatio
  const styleRatio = 1;
  const [containerReady, setContainerReady] = useState(false);
  const containerResize = useWindowSize();

  useEffect(() => {
    setContainerReady(true);
  }, []);

  useEffect(() => {
    if (containerReady) {
      // weapp内获取不到offsetWidth，需特殊处理
      if (process.env.TARO_ENV === 'weapp') {
        // FIXME：the below code doesn't work
        // const node = Taro.createSelectorQuery().select('#' + ref.current?.id);
        // node.boundingClientRect(rect => {
        //   console.log(`containerWidth: ${rect?.width}`);
        //   if (rect) {
        //     setStyleZoom(rect.width / 750);
        //     setContainerUpdated(count => count + 1);
        //   }
        // }).exec();
        // TODO: 动态宽度，横屏支持
        setStyleZoom(390 / 750);
      } else {
        const containerWidth = ref.current?.offsetWidth;
        console.log(`containerWidth: ${containerWidth}`);
        if (containerWidth) {
          setStyleZoom(containerWidth / 750);
        }
      }
    }
  }, [containerReady, containerResize]);

  const shareTitle = useMemo(() => {
    return t('chart.name');
  }, [t]);

  useShareAppMessage((res) => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      // console.log(res.target);
    }
    return {
      title: shareTitle,
      path: '/pages/chart/index',
    };
  });

  useShareTimeline(() => {
    return {
      title: shareTitle,
    };
  });

  return (
    <View ref={ref} className='page'>
      {/*FIXME: 默认值为1传入然后动态产生变化，会导致图表高宽错乱。目前先workaround等值动态取到后再实例化子组建。*/}
      {styleZoom ? <Chart styleZoom={styleZoom} styleRatio={styleRatio}></Chart> : ''}
      {styleZoom ? <History styleZoom={styleZoom} styleRatio={styleRatio}></History> : ''}
    </View>
  );
}
