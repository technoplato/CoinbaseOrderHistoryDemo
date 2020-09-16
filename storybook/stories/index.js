import React from 'react'

import { storiesOf } from '@storybook/react-native'
import TestStorybook from '../../src/components/TestStorybook'
import TradeHistory from '../../src/components/TradeHistory'

storiesOf('TestStorybook', module).add(
  'placeholder',
  () => {
    return <TestStorybook />
  }
)

// storiesOf('TradeHistory', module).add('with text', () => (
//   <TradeHistory />
// ))
