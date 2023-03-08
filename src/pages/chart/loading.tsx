import { useEffect, useState } from 'react';

export const LoadingTail = () => {
  const loadingSymbolPlaceHolder = '...';
  const [loadingSymbol, setLoadingSymbol] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setLoadingSymbol(loadingSymbolPlaceHolder.substring(0, (loadingSymbol.length % 3) + 1)), 1000);

    return () => clearInterval(timer);
  }, [loadingSymbol.length]);

  return <>{loadingSymbol}</>;
};
