import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Trends from '../screens/Trends'
import Graph from '../screens/Graph'
import FilterScreen from '../screens/FilterScreen'
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={() => ({
      tabBarActiveBackgroundColor: "#67B05B",
      tabBarInactiveBackgroundColor: "#67B05B",
      tabBarActiveTintColor: "#2e5a6b",
      backgroundColor: "blue",
    })}
    >
      <Tab.Screen 
      name='Filter' 
      component={FilterScreen}
      options={{
        title: 'Fitler',
        headerStyle: {
          backgroundColor: '#67B05B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '900',
          color:'#2e5a6b',
          fontSize:20
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="filter" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen 
      name = "Graph" 
      component = {Graph}
      options={{
        title: 'Graph',
        headerStyle: {
          backgroundColor: '#67B05B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '900',
          color:'#2e5a6b',
          fontSize:20
        },
        tabBarIcon: ({ color, size }) => (
          <Entypo name="line-graph" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen
       name = "Trends" 
       component={Trends}
       options={{
        title: 'Trends',
        headerStyle: {
          backgroundColor: '#67B05B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '900',
          color:'#2e5a6b',
          fontSize:20
        },
        tabBarIcon: ({ color, size }) => (
          <Feather name="trending-up" size={size} color={color} />
        ),
      }}
       />

    </Tab.Navigator>
  )
}

export default TabNavigator