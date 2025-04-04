import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Welcome from './Screens/Welcome';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={Welcome}/>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
