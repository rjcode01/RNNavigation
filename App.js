import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import { Alert, Pressable, Text } from 'react-native';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home'
      screenOptions={{
        headerStyle:{
          backgroundColor: 'lightgreen',
        },
        headerTintColor: 'red',
        headerTitleStyle: {
          color: 'green',
          fontSize: 20,
          fontWeight:'bold'
        },
        headerRight: ()=>(
          <Pressable onPress={()=> Alert.alert('Menu option')}>
            <Text>Menu</Text>
          </Pressable>
        ),
        contentStyle: {
          backgroundColor:'blue'
        }
      }}
      >
    <Stack.Screen name='Home' component={Home} initialParams={{name: "Code"}}/>
    <Stack.Screen name='About' component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}