import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigText: {
    fontSize: 42,
  },
})

const TestStorybook = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>TestStorybook</Text>
    </View>
  )
}

export default TestStorybook
