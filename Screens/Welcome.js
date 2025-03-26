import { Settings, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation();
  return (
    <View>
        <Text>Welcome to News App</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Text>Go to Home Screen</Text>
        </TouchableOpacity>
    </View>
    
  )
}

export default Welcome

const styles = StyleSheet.create({})