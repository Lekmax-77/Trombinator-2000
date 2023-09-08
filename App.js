import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'; // Assurez-vous que le chemin est correct
import Menu from './Menu'; // Assurez-vous que le chemin est correct

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer options={{title: '', headerLeft: null}}>
      <Stack.Navigator initialRouteName="Login" options={{title: '', headerLeft: null}} >
        <Stack.Screen name="Login" component={Login} options={{title: '', headerLeft: null}}/>
        <Stack.Screen name="Menu" component={Menu} options={{title: '', headerLeft: null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
