import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import TitleScreen from '../screens/TitleScreen'

const RootStack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
       <RootStack.Screen 
        options={{
          headerShown: false,
        }}
       
       name="Title" component={TitleScreen}/>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator}/>
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator