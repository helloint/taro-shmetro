import Taro, { request } from '@tarojs/taro';
import { MetroDaily } from './types';

const useCloudFunction = false;

const httpClient = async (url: string, data?: any) => {
  const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP;
  if (useCloudFunction && isWeapp) {
    const res = await Taro.cloud.callFunction({
      name: 'proxy',
      data: {
        url: url,
        ...data,
      },
    });

    if (typeof res.result === 'string') {
      return JSON.parse(res.result);
    }
    return res.result;
  } else {
    const response = await request({ url, data });
    return response.data;
  }
};

/**
 * Cut the data which is after the endDate
 * @param data
 * @param endDate
 * @returns {{regions: {}, daily: {}}}
 */
const cutDailyData = (data: MetroDaily[], endDate: string): MetroDaily[] => {
  const daily: MetroDaily[] = [];
  data.forEach(([date, num]) => {
    if (date <= endDate) {
      daily.push([date, num]);
    }
  });

  return daily;
};

/**
 * format date
 * @param date 2022-05-10
 * @param pattern yyyy年mm月dd日
 * @returns {string} 2022年5月10日
 */
const formatDate = (date: string, pattern: string): string => {
  return pattern
    .replace('yyyy', parseInt(date.split('-')[0], 10) + '')
    .replace('mm', parseInt(date.split('-')[1], 10) + '')
    .replace('dd', parseInt(date.split('-')[2], 10) + '');
};

export { cutDailyData, formatDate, httpClient };
