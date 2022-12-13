import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Trends from '../screens/Trends'
import Graph from '../screens/Graph'
import FilterScreen from '../screens/FilterScreen'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Filter' component={FilterScreen}/>
      <Tab.Screen name = "Trends" component={Trends}/>
      <Tab.Screen name = "Graph" component = {Graph}/>
    </Tab.Navigator>
  )
}

export default TabNavigator