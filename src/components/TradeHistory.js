import React, { useMemo, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTicker } from '../hooks/use-ticker'
import useTimeout from 'use-timeout'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const TradeHistoryItem = ({
  tick,
}: {
  tick: {
    time: string,
    trade: {
      size: string,
      price: string,
    },

    prev: { price: string },
  },
}) => {
  console.log('rendering tick for time ', tick.time)
  const [backgroundColor, setColor] = useState(
    tick.prev.price < tick.trade.price ? 'green' : 'red'
  )
  useTimeout(() => {
    setColor('transparent')
  }, 200)
  return useMemo(() => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor,
        }}
      >
        <Text>{tick.time}</Text>
        <Text>{tick.trade.size}</Text>
        <Text
          style={{
            color:
              tick.prev.price < tick.trade.price
                ? 'green'
                : 'red',
          }}
        >
          {tick.trade.price}
        </Text>
      </View>
    )
  }, [backgroundColor])
}

const TradeHistory = () => {
  const { lines } = useTicker()
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lines.slice(1, 20)}
        renderItem={({ item: tick }) => {
          return (
            <TradeHistoryItem key={tick.id} tick={tick} />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default TradeHistory
