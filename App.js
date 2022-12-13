import { NavigationContainer } from '@react-navigation/native';
import TitleScreen from './screens/TitleScreen';
import React, { useState } from 'react'
import RootNavigator from './navigator/RootNavigator';


export default function App() {
  const [showTitle,setShowTitle]=useState(false)
  return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
  );
}
