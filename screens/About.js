import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const About = ({route}) => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>About</Text>
      <Text>{route.params.name}</Text>

      <Button title='Go to Home'  onPress={()=> navigation.navigate('Home')}/>
      <Button title='Update the name' onPress={()=> navigation.setParams({
        name: 'Komal'
      })}/>
    </View>
  )
}

export default About