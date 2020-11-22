import React from 'react'
import * as Icon from '../components/icons'

export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

export const MENU = [
  {
    key: 'home',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: 'List of Questions'
  },
  {
    key: 'create',
    path: '/create',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: 'Create a New Question'
  }
]
