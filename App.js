import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Todo from './Components/Todo';
import About from './Components/About';
const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
         headerShown: false
          }}>
        <Stack.Screen name="Home" component={Todo} />
        <Stack.Screen name="about" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

