import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Agendamento from '../screens/Agendamento';
import Consulta from '../screens/Consulta';

import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Agendamento" component={Agendamento} />
        <Stack.Screen name="Consulta" component={Consulta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;