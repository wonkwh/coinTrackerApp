import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';

export default function Coins() {
  const [coins, setCoins] = useState([]);
  const getCoins = useCallback(
    () =>
      fetch('https://api.coinpaprika.com/v1/coins')
        .then((response) => response.json())
        .then((json) => setCoins(json)),
    []
  );
  useEffect(() => {
    getCoins();
  }, [getCoins]);
  // Use this variable to access the data
  const cleanedCoins = coins
    .filter((coin) => coin.rank !== 0)
    .filter((coin) => coin.is_active === true)
    .slice(0, 100);
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
