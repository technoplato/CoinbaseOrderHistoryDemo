/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native'

import { Button } from 'react-native-paper'
import { useCoinbaseData } from '../hooks/useCoinbaseData'

const OrderListItem = ({ order }) => {
  const color = order.side !== 'sell' ? 'red' : 'green'

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text>{parseFloat(order.size).toFixed(4)}</Text>
      <Text style={{ color }}>
        {parseFloat(order.price).toFixed(2)}
      </Text>
      <Text>
        {new Date(order.time).toLocaleTimeString()}
      </Text>
    </View>
  )
}

const Home = () => {
  const { data, fetchData } = useCoinbaseData(
    'price',
    'desc'
  )

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item: order }) => {
            console.log(JSON.stringify(order, null, 4))
            return (
              <OrderListItem
                key={'' + order.trade_id}
                order={order}
              />
            )
          }}
        />
        <Button
          mode="contained"
          onPress={async () => {
            fetchData()
          }}
        >
          Press me
        </Button>
      </SafeAreaView>
    </>
  )
}

export default Home
