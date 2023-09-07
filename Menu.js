import React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native'; // Ajout de useRoute
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home</Text>
  </View>
);

const EventsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Events</Text>
  </View>
);

const ForumScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Forum</Text>
  </View>
);

const TrombiScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tromni</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings</Text>
  </View>
);

const Menu = () => {
  const route = useRoute();

  // Accédez aux paramètres passés depuis l'écran de connexion
  const { email, token } = route.params;
  
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen 
        name="Events" 
        component={EventsScreen} 
        options={{ title: 'Events' }} // Définir le titre de l'écran
      />
      <Tab.Screen 
        name="Forum" 
        component={ForumScreen} 
        options={{ title: 'Forum' }} // Définir le titre de l'écran
      />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} // Masquer le titre et la flèche de retour
      />
      <Tab.Screen 
        name="Trombi" 
        component={TrombiScreen} 
        options={{ title: 'Trombi' }} // Définir le titre de l'écran
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ title: 'Settings' }} // Définir le titre de l'écran
      />
    </Tab.Navigator>
  );
};

export default Menu;
