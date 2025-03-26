import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Discover from './Discover'
import Saved from './Saved'
import Settings from './Settings'
import HomeScreen from './HomeScreen'

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name='Discover' component={Discover}/>
                <Tab.Screen name='Saved' component={Saved}/>
                <Tab.Screen name='Settings' component={Settings}/>
            </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})