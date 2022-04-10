import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';

export default function Prices() {
  const [tickers, setTickers] = useState([]);
  const getTickers = useCallback(
    () =>
      fetch('https://api.coinpaprika.com/v1/tickers')
        .then((response) => response.json())
        .then((json) => setTickers(json)),
    []
  );
  useEffect(() => {
    getTickers();
  }, [getTickers]);
  // Use this variable to access the data
  const cleanedTickers = tickers.filter(
    (ticker) => ticker.circulating_supply !== 0
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e272e',
      }}></View>
  );
}
