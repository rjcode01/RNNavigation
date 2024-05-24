import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation, route}) => {
  return (
    <View>
      <Text>Home</Text>
      <Text>default : {route.params.name}</Text>
      <Button title='Go To About' onPress={()=> navigation.navigate('About',{
        name: 'Ranjan'
      })}/>
    </View>
  )
}

export default Home

