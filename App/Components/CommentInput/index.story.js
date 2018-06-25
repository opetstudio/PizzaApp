import React from 'react'
import { storiesOf } from '@storybook/react-native'

import CommentInput from './index'

storiesOf('CommentInput')
  .add('Default', () => (
    <CommentInput
      title='ALERT ALERT'
    />
  ))
  .add('Custom Height', () => (
    <CommentInput />
  ))
