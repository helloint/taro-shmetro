// import { View } from '@tarojs/components';
// import { navigateTo } from '@tarojs/taro';
import Chart from './testChart';

const Index = () => {
  console.log(`### Index render`);
  return (
    <>
      {/*<View onClick={() => navigateTo({ url: `/pages/test/testError` })}>Go To Error</View>*/}
      {/*<View onClick={() => navigateTo({ url: `/pages/test/testChart` })}>Go To Chart</View>*/}
      <Chart />
    </>
  );
};

export default Index;
